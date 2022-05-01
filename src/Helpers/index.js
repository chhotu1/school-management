import dbConnect from "./cors/dbConnect";
// import Role from "../Models/Role";
// import User from "../Models/User";
import Validation from "./cors/validation";
import Regex from "./Regex";
import Images  from "./Images";

const STATUS ={
    ACTIVE:1,
    DEACTIVE:2,
    DELETED:3
}

const Helpers ={
    dbConnect,
    Validation,
    Regex,
    STATUS,
    Images
}


export default Helpers
