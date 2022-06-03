import { apiHandler } from "../../../src/Helpers/api/api-handler";
import { jwtMiddleware } from "../../../src/Helpers/api/jwt-middleware";
import FeeType from "./../../../src/Models/FeeType";
import dbConnect from "../../../src/Helpers/cors/dbConnect";
import Helpers from "../../../src/Helpers";
import Constant from '../../../src/Share/Constant';
dbConnect();
export default apiHandler({
    get: getData,
    post: add,
});

async function getData(req, res) {
    await jwtMiddleware(req, res);
    await FeeType.find().sort({created_at: -1})
        .then((data) => {
            return res.json({ status: true, success: true, data: data });
        })
        .catch((error) => {
            return res.json({ status: false, success: true, statusCode: 40, data: error });
        });
}

async function add(req, res) {
    try {
        await jwtMiddleware(req, res);
        const {error,value}= Helpers.Validation.feeTypeValidation(req.body);
        if(error){
            return res.json({
                message: "Validation error",
                status:false,
                data:`${error.details.map(x => x.message).join(',')}`,
            });
        }
        if (req.user.role !== Constant.ADMIN) {
            return res.json({ status: false, message: "You are not authorised,You are Not Admin" });
        }
        let userId = req.user._id;
        const { title, amount } = req.body;
        let data = await FeeType.findOne({
            title,
        });
        if (data) {
            return res.json({ status: false, message: "Title already exists" });
        }
       data = new FeeType({
            title,
            amount,
            created_by: userId,
        });
        await data.save();
        return res.status(200).json({
            status: true,
            data: data,
            message: "Fee Type added successfully",
        });
    } catch (error) {
        return res.json({
            message: "Error in Saving",
            status: false,
        });
    }
}



