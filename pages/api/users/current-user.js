import { apiHandler } from '../../../src/Helpers/api/api-handler';
import { jwtMiddleware } from '../../../src/Helpers/api/jwt-middleware';
import User from '../../../src/Models/User'
import dbConnect from '../../../src/Helpers/cors/dbConnect';
dbConnect();
export default apiHandler({
    get: getCurrentUser
});

async function getCurrentUser(req, res) {
    await jwtMiddleware(req, res);
    let userId = req.user._id;
    if (!userId) {
        return res.json({ status: false, success: false, data: '', message: "User id can not be empty " });
    }
    await User.findById(userId).then(data => {
        if (data)
            return res.json({ status: true, success: true, statusCode: 200, data: data, message: 'User Profile data' });
        return res.json({ status: false, success: true, statusCode: 200, data: '', message: 'User Not Exists' });
    }).catch(error => {
        return res.json({ status: false, success: false, statusCode: 40, data: error });
    })
}