

import { apiHandler } from '../../../src/Helpers/api/api-handler';
import { jwtMiddleware } from '../../../src/Helpers/api/jwt-middleware';
import Teacher from '../../../src/Models/Teacher';
import dbConnect from '../../../src/Helpers/cors/dbConnect';
dbConnect()
export default apiHandler({
    get: getById,
    put: update,
    delete: _delete
});

async function getById(req, res) {
    await jwtMiddleware(req, res);
    if (!req.query.id) {
        return res.json({ status: false, success: false, data: '', message: "Teacher id can not be empty " });
    }
    await Teacher.findById(req.query.id).then(data => {
        if (data)
            return res.json({ status: true, success: true, statusCode: 200, data: data, message: 'Teacher Profile data' });
        return res.json({ status: false, success: true, statusCode: 200, data: '', message: 'Teacher Not Exists' });

    }).catch(error => {
        return res.json({ status: false, success: false, statusCode: 40, data: error });
    })

}

async function update(req, res) {
    await jwtMiddleware(req, res);
    let id = req.user._id;
    if (!id) {
        return res.json({ status: false, success: false, data: '', message: "User id can not be empty " });
    }
    await User.findById(id).then(data => {
        if (data)
            return res.json({ status: true, success: true, statusCode: 200, data: data, message: 'User Profile data' });
        return res.json({ status: false, success: true, statusCode: 200, data: '', message: 'User Not Exists' });
    }).catch(error => {
        return res.json({ status: false, success: false, statusCode: 40, data: error });
    })
}

async function _delete(req, res) {
    await jwtMiddleware(req, res);
    if (!req.query.id) {
        return res.json({ status: false, success: false, data: '', message: "Teacher content can not be empty" + req.query.id });
    }
    await Teacher.findByIdAndRemove(req.query.id)
        .then(response => {
            if (!response) {
                return res.json({ status: false, success: false, data: '', message: "Teacher not found with id " + req.query.id });
            }
            return res.json({ status: true, success: true, data: '', message: "Teacher deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.json({ status: false, success: false, data: '', message: "Teacher not found with id " + req.query.id });
            }
            return res.json({ status: false, success: false, data: '', message: "Could not delete Teacher with id " + req.query.id });
        });
}
