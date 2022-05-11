import { apiHandler } from '../../../src/Helpers/api/api-handler';
import { jwtMiddleware } from '../../../src/Helpers/api/jwt-middleware';
import Helpers from '../../../src/Helpers';
import User from '../../../src/Models/User'
export default apiHandler({
    get: getUsers
});

async function getUsers(req, res) {
    // await jwtMiddleware;
    console.log(req.headers.token,'===========');
    User.find({}, function (err, users) {
        if (err) {
            return res.json({ status: false, success: false, statusCode: 500, errorMessage: err });
        }
        return res.json({ status: true, success: true, statusCode: 200, data: users });
    })
}