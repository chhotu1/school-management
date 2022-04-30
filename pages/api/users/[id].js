

import { apiHandler } from '../../../src/Helpers/api/api-handler';
import Helpers from '../../../src/Helpers';
import { jwtMiddleware } from '../../../src/Helpers/api/jwt-middleware';
export default apiHandler({
    get: getById,
    put: update,
    delete: _delete
});

async function getById(req, res) {
    await jwtMiddleware(req, res);
    if (!req.query.id) {
        return res.json({ status: false, success: false, data: '', message: "User id can not be empty " });
    }
    await Helpers.User.findById(req.query.id).then(data => {
        if (data)
            return res.json({ status: true, success: true, statusCode: 200, data: data, message: 'User Profile data' });
        return res.json({ status: false, success: true, statusCode: 200, data: '', message: 'User Not Exists' });

    }).catch(error => {
        return res.json({ status: false, success: false, statusCode: 40, data: error });
    })

}

async function update(req, res) {
    await jwtMiddleware(req, res);
    let userId = req.user._id;
    if (!userId) {
        return res.json({ status: false, success: false, data: '', message: "User id can not be empty " });
    }
    await Helpers.User.findById(userId).then(data => {
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
        return res.json({ status: false, success: false, data: '', message: "Users content can not be empty" + req.query.id });
    }
    await Helpers.User.findByIdAndRemove(req.query.id)
        .then(user => {
            if (!user) {
                return res.json({ status: false, success: false, data: '', message: "Users not found with id " + req.query.id });
            }
            return res.json({ status: true, success: true, data: '', message: "Users deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.json({ status: false, success: false, data: '', message: "Users not found with id " + req.query.id });
            }
            return res.json({ status: false, success: false, data: '', message: "Could not delete Users with id " + req.query.id });
        });

}
