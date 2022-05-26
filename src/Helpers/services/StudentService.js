import axios from "axios";
import Helpers from "./../../Helpers";
const StudentService = {

    create: (payload) => {
        let data = StudentService.toFormData(payload);
        return axios.post('/api/student',data, {headers: {token:Helpers.StorageService.getAccessToken() }});
    },
    getStudent: () => {
        return axios.get('/api/student', {headers: {token:Helpers.StorageService.getAccessToken() }});
    },

    toFormData: (payload) => {
        const formData = new FormData();
        for (let key in payload) {
            formData.append(key, payload[key]);
        }
        return formData;
    }
    
};

export default StudentService;
