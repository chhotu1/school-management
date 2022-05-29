import dbConnect from "./cors/dbConnect";
import Validation from "./cors/validation";
import Regex from "./Regex";
import Images  from "./Images";
import AuthServices from "./services/AuthServices";
import UserServices from "./services/UserServices";
import Forms from "./Forms";
import StorageService from "./services/StorageServices";
import StudentService from "./services/StudentService";
import TeacherServices from "./services/TeacherServices";
import Constant from "../Share/Constant";
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
    Images,
    AuthServices,
    Forms,
    StorageService,
    UserServices,
    StudentService,
    TeacherServices,
    Constant
}


export default Helpers
