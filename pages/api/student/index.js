import { apiHandler } from "../../../src/Helpers/api/api-handler";
import { jwtMiddleware } from "../../../src/Helpers/api/jwt-middleware";
import Student from "./../../../src/Models/Student";
import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'

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

async function getData(req, res) {
    Student.find()
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
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
            let photo = '';
            if (files.photo) {
                const d = new Date();
                let time = d.getTime();
                var oldPath = files.photo.filepath;
                photo = `${fields.name}_${time}_${files.photo.originalFilename}`;
                var newPath = `./public/uploads/student/${photo}`;
                mv(oldPath, newPath, function (err) {
                });
            }

            let student_data = new Student({
                title: fields.name,
                email:fields.email,
                address:fields.address,
                country:fields.country,
                state:fields.state,
                city:fields.city,
                class:fields.class,
                gender:fields.gender,
                dob:fields.dob,
                pincode:fields.pincode,
                father_name:fields.father_name,
                father_mobile:fields.father_mobile,
                dob:fields.dob,
                occupation:fields.occupation,
                photo: photo,
                created_by: userId,
            });
            student_data.save();
            return res.status(200).json({
                status: true,
                data: student_data,
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
