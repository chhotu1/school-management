import { apiHandler } from "../../../src/Helpers/api/api-handler";
import { jwtMiddleware } from "../../../src/Helpers/api/jwt-middleware";
import User from "./../../../src/Models/User";
import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'
import dbConnect from "../../../src/Helpers/cors/dbConnect";
var mv = require('mv');

export const config = {
    api: {
        bodyParser: false,
    }
};

export default apiHandler({
    get: getData,
    post: add,
});
dbConnect();
async function getData(req, res) {
    await jwtMiddleware(req, res);
    let userId = req.user._id;
    await User.find({_id:{ $ne: userId }})
        .then((data) => {
            return res.json({ status: true, success: true, data: data });
        })
        .catch((error) => {
            return res.json({ status: false, success: true, statusCode: 40, data: error });
        });
}

async function add(req, res) {
    await jwtMiddleware(req, res);
    let userId = req.user._id;
    const data = await new Promise((resolve, reject) => {
        const form = new IncomingForm()
        form.parse(req, async(err, fields, files) => {
            var userData = await User.findOne({
                email:fields.email
            });
            if (userData) {
                return res.json({
                    message: "User Already Exists",
                    status:false,
                    data:[],
                });
            }


            if (err) return reject(err)
            let photo = '';
            if (files.photo) {
                const d = new Date();
                let time = d.getTime();
                var oldPath = files.photo.filepath;
                photo = `${fields.name}_${time}_${files.photo.originalFilename}`;
                var newPath = `./public/uploads/users/${photo}`;
                mv(oldPath, newPath, function (err) {
                });
            }

            let user_data = {
                name: fields.name,
                password: fields.password,
                email:fields.email,
                address:fields.address,
                country:fields.country,
                state:fields.state,
                city:fields.city,
                class:fields.class,
                gender:fields.gender,
                dob:fields.dob,
                pincode:fields.pincode,
                father:fields.father,
                phone:fields.phone,
                dob:fields.dob,
                qualification:fields.qualification,
                experience:fields.experience,
                photo: photo,
                created_by: userId,
            };
            const user = await User.create(user_data);
            return res.status(200).json({
                status: true,
                data: user,
                message: "Record added successfully",
            });
        })
    })
}

const saveFile = async (file) => {
    const data = fs.readFileSync(file.path);
    fs.writeFileSync(`./public/${file.name}`, data);
    await fs.unlinkSync(file.path);
    return;
};

