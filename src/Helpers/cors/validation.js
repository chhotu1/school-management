import Joi from 'joi';
import Helpers from './../../Helpers';
const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true // remove unknown props
};

function registerValidation(data) {
    const registerSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp(Helpers.Regex.PASSWORD_REGEX)).required(),
        phone: Joi.number().integer().min(1000000000).message("Invalid mobile number").max(9999999999).message("Invalid mobile number"),
        name:Joi.string().required(),
        // address:Joi.string(),
    });
    return registerSchema.validate(data,options)
}
function roleValidation(data) {
    const schema = Joi.object({
        title: Joi.string().required(),
        role: Joi.number().required().min(1).message("Invalid Role").max(99).message("Invalid Role"),
    });
    return schema.validate(data,options)
}
function sliderValidation(data) {
    const schema = Joi.object({
        title: Joi.string().required(),
    });
    return schema.validate(data,options)
}


function changePassword(data) {
    const schema = Joi.object({
        currentPassword: Joi.string().pattern(new RegExp(Helpers.Regex.PASSWORD_REGEX)).required(),
        newPassword: Joi.string().pattern(new RegExp(Helpers.Regex.PASSWORD_REGEX)).required(),
        verifyPassword: Joi.string().pattern(new RegExp(Helpers.Regex.PASSWORD_REGEX)).required(),
    });
    return schema.validate(data,options)
}

function loginValidation(data) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp(Helpers.Regex.PASSWORD_REGEX)).required(),
    });
    return schema.validate(data,options)
}
function feeValidation(data) {
    const schema = Joi.object({
        title: Joi.string().required(),
        amount: Joi.number().integer().required(),
    });
    return schema.validate(data,options)
}

function feeTypeValidation(data) {
    const schema = Joi.object({
        title: Joi.string().required(),
        amount: Joi.number().integer().required(),
    });
    return schema.validate(data,options)
}

const Validation = {
    registerValidation,
    loginValidation,
    changePassword,
    roleValidation,
    sliderValidation,
    feeValidation,
    feeTypeValidation
}
export default Validation;

