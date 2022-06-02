import { apiHandler } from "../../../src/Helpers/api/api-handler";
import { jwtMiddleware } from "../../../src/Helpers/api/jwt-middleware";
import Role from "./../../../src/Models/Role";
import Helpers from "../../../src/Helpers";
export default apiHandler({
    get: getRoles,
    post: addRole,
});

async function getRoles(req, res) {
    await jwtMiddleware(req, res);
    Role.find().sort({created_at: -1})
        .populate("created_by")
        .then((data) => {
            return res.json({ status: true, success: true, data: data });
        })
        .catch((error) => {
            return res.json({ status: false, success: true, statusCode: 40, data: error });
        });
}

async function addRole(req, res) {
    await jwtMiddleware(req, res);
    const { title, role } = req.body;
    const { error, value } = Helpers.Validation.roleValidation(req.body);
    if (error) {
        var errorsData = [];
        error.details.map((item) => {
            errorsData.push({ name: item.context.key, message: item.message });
        });
        return res.json({
            message: "Validation error",
            status: false,
            data: `${error.details.map((x) => x.message).join(",")}`,
        });
    }

    let userId = req.user._id;
    if (req.user.role !== 1) {
        return res.json({ status: false, message: "You are not authorised" });
    }
    try {
        let role_data = await Role.findOne({
            title,
        });
        if (role_data) {
            return res.json({ status: false, message: "Role already exists" });
        }

        role_data = new Role({
            title,
            role,
            created_by: userId,
        });
        await role_data.save();
        return res.status(200).json({
            status: true,
            data: role_data,
            message: "Role added successfully",
        });
    } catch (error) {
        return res.json({
            message: "Error in Saving",
            status: false,
        });
    }
}
