const jwt = require("jsonwebtoken");
import Helpers from './../../../src/Helpers';
import User from '../../../src/Models/User'
Helpers.dbConnect();
export default async (req, res) => {
    const { method } = req;
    switch (method) {
        case 'POST':
            try {
               const {error,value}= Validation.registerValidation(req.body);
               if(error){
                   var errorsData=[];
                   error.details.map((item)=>{
                       errorsData.push({name:item.context.key,'message':item.message})
                   })
                    return res.json({
                        message: "Validation error",
                        status:false,
                        data:`${error.details.map(x => x.message).join(',')}`,
                    });
               }
                var userData = await User.findOne({
                    email:req.body.email
                });
                if (userData) {
                    return res.json({
                        message: "User Already Exists",
                        status:false,
                        data:[],
                    });
                }
                const user = await User.create(req.body);
                jwt.sign(
                    {user},process.env.TOKEN_SECRET, {
                    expiresIn: '24h'
                },
                    (err, token) => {
                        if (err) throw err;
                        return res.status(200).json({
                            token,
                            data: user,
                            status:true,
                            message:'User added successfully'
                        });
                    }
                );
            } catch (error) {
                return res.json({ status: false,data:error });
            }
            break;
        default:
            return res.json({ status: false });
            break;
    }
}