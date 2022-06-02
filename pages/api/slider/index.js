import { apiHandler } from "../../../src/Helpers/api/api-handler";
import { jwtMiddleware } from "../../../src/Helpers/api/jwt-middleware";
import Slider from "./../../../src/Models/Slider";
import Helpers from "../../../src/Helpers";

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
    Slider.find().sort({created_at: -1})
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
             let photo ='';
             if(files.photo){
                const d = new Date();
                let time = d.getTime();
                var oldPath = files.photo.filepath;
                photo = `${fields.title}_${time}_${files.photo.originalFilename}`;
                var newPath = `./public/uploads/${photo}`;
                mv(oldPath, newPath, function(err) {
                });
             }
             let slider_data = new Slider({
                title:fields.title,
                image:photo,
                created_by: userId,
            });
             slider_data.save();
            return res.status(200).json({
                status: true,
                data: slider_data,
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

