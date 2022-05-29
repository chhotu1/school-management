

import { apiHandler } from '../../../src/Helpers/api/api-handler';
import Helpers from '../../../src/Helpers';
import { jwtMiddleware } from '../../../src/Helpers/api/jwt-middleware';
import Fee from '../../../src/Models/Fee'
export default apiHandler({
    get: getById,
    put: update,
    delete: _delete
});

async function getById(req, res) {
    await jwtMiddleware(req, res);
    if (!req.query.id) {
        return res.json({ status: false, success: false, data: '', message: "Fee id can not be empty " });
    }
    await Fee.findById(req.query.id).then(data => {
        if (data)
            return res.json({ status: true, success: true, statusCode: 200, data: data, message: 'Fee Profile data' });
        return res.json({ status: false, success: true, statusCode: 200, data: '', message: 'Fee Not Exists' });

    }).catch(error => {
        return res.json({ status: false, success: false, statusCode: 40, data: error });
    })

}

async function update(req, res) {
    await jwtMiddleware(req, res);
    let feeId = req.user._id;
    if (!feeId) {
        return res.json({ status: false, success: false, data: '', message: "User id can not be empty " });
    }
    await User.findById(feeId).then(data => {
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
        return res.json({ status: false, success: false, data: '', message: "fees content can not be empty" + req.query.id });
    }
    await Fee.findByIdAndRemove(req.query.id)
        .then(fee => {
            if (!fee) {
                return res.json({ status: false, success: false, data: '', message: "fees not found with id " + req.query.id });
            }
            return res.json({ status: true, success: true, data: '', message: "fees deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.json({ status: false, success: false, data: '', message: "fees not found with id " + req.query.id });
            }
            return res.json({ status: false, success: false, data: '', message: "Could not delete fees with id " + req.query.id });
        });
}
