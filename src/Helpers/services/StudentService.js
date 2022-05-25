import axios from "axios";
import Helpers from "./../../Helpers";
const StudentService = {
    create: (payload) => {
        return axios.post('/api/student',payload, {headers: {token:Helpers.StorageService.getAccessToken() }});
    },

};

export default StudentService;
