import axios from "axios";
import Helpers from "./../../Helpers";
const TeacherServices = {

    create: (payload) => {
        let data = TeacherServices.toFormData(payload);
        return axios.post('/api/teacher',data, {headers: {token:Helpers.StorageService.getAccessToken() }});
    },
    getTeacher: () => {
        return axios.get('/api/teacher', {headers: {token:Helpers.StorageService.getAccessToken() }});
    },

    toFormData: (payload) => {
        const formData = new FormData();
        for (let key in payload) {
            formData.append(key, payload[key]);
        }
        return formData;
    }
    
};

export default TeacherServices;
