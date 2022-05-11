
const jwt = require("jsonwebtoken");
import { errorHandler } from "./error-handler";

export { jwtMiddleware };

function jwtMiddleware(req, res,next) {
    const token = req.headers.token;
    if (!token) return res.json({ message: "Auth Error", status: false });
    try {
        const decoded = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = decoded.user;
        // console.log(req.user,'================')
        // if (user_role !== config.ROLE.ADMIN)
            // return res.json({ message: "You are not Authorized", status: false });
        next();
    } catch (err) {
        errorHandler(err, res);
        // res.json({ message: "Invalid Token", status: false });
    }
}
