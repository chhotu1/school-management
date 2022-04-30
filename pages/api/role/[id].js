

import { apiHandler } from '../../../src/Helpers/api/api-handler';
import Helpers from '../../../src/Helpers';
import { jwtMiddleware } from '../../../src/Helpers/api/jwt-middleware';
import Role from '../../../src/Models/Role'
export default apiHandler({
    get: getById,
    delete: _delete
});

async function getById(req, res) {
    await jwtMiddleware(req, res);
    if (!req.query.id) {
        return res.json({ status: false, success: false, data: '', message: "Role id can not be empty " });
    }
    await Role.findById(req.query.id).then(data => {
        if (data)
            return res.json({ status: true, success: true, statusCode: 200, data: data, message: 'Role data' });
        return res.json({ status: false, success: true, statusCode: 200, data: '', message: 'Role Not Exists' });

    }).catch(error => {
        return res.json({ status: false, success: false, statusCode: 40, data: error });
    })

}

async function _delete(req, res) {
    await jwtMiddleware(req, res);
    if (!req.query.id) {
        return res.json({ status: false, success: false, data: '', message: "Role content can not be empty" + req.query.id });
    }
    await Role.findByIdAndRemove(req.query.id)
        .then(user => {
            if (!user) {
                return res.json({ status: false, success: false, data: '', message: "Role not found with id " + req.query.id });
            }
            return res.json({ status: true, success: true, data: '', message: "Role deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.json({ status: false, success: false, data: '', message: "Role not found with id " + req.query.id });
            }
            return res.json({ status: false, success: false, data: '', message: "Could not delete Role with id " + req.query.id });
        });

}
