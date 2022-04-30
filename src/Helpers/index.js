import dbConnect from "./cors/dbConnect";
import Role from "../Models/Role";
import User from "../Models/User";
import Validation from "./cors/validation";
import Regex from "./Regex";

const STATUS ={
    ACTIVE:1,
    DEACTIVE:2,
    DELETED:3
}

const Helpers ={
    dbConnect,
    User,
    Role,
    Validation,
    Regex,
    STATUS,
}


export default Helpers
