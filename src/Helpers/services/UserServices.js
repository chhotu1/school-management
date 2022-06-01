import axios from "axios";
import Helpers from "./../../Helpers";
const UserServices = {
    create: (payload) => {
        let data = TeacherServices.toFormData(payload);
        return axios.post('api/users', data, {headers: {token:Helpers.StorageService.getAccessToken() }});
    },
    getAll: () => {
        return axios.get('/api/users', {headers: {token:Helpers.StorageService.getAccessToken() }});
    },
    remove: (id) => {
        return axios.delete(`/api/users/${id}`, {headers:{token:Helpers.StorageService.getAccessToken() } });
    },
    getCurrentUser: () => {
        return axios.get('/api/users/current-user', {headers: {token:Helpers.StorageService.getAccessToken() }});
    },
    toFormData: (payload) => {
        const formData = new FormData();
        for (let key in payload) {
            formData.append(key, payload[key]);
        }
        return formData;
    }
};

export default UserServices;
