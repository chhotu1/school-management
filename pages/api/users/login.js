const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
import Helpers from "./../../../src/Helpers";
import User from './../../../src/Models/User';
Helpers.dbConnect();
export default async (req, res) => {
    const { method } = req;
    switch (method) {
        case "POST":
            try {
                const { email, password } = req.body;
                const { error, value } = Helpers.Validation.loginValidation(req.body);
                if (error) {
                    return res.json({
                        message: "Validation error",
                        status: false,
                        data: `${error.details.map((x) => x.message).join(",")}`,
                    });
                }
                let user = await User.findOne({
                    email,
                });
                if (!user)
                    return res.json({
                        message: "User Not Exist",
                        status: false,
                        status_code:404,
                    });
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch)
                    return res.json({
                        message: "Incorrect Password !",
                        status: false,
                    });

                const payload = {
                    user,
                };

                jwt.sign(
                    payload,process.env.TOKEN_SECRET,
                    {
                        expiresIn: "24h",
                    },
                    (err, token) => {
                        if (err) throw err;
                        return res.json({
                            token,
                            data:user,
                            status: true,
                            status_code:200,
                            message: "User login successfully",
                        });
                    }
                );
            } catch (error) {
                console.log(error)
                return res.json({ status: false, data: 'error' });
            }
            break;
        default:
            return res.json({ status: false });
            break;
    }
};
