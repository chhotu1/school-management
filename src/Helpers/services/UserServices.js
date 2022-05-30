import axios from "axios";
import Helpers from "./../../Helpers";
const UserServices = {
    create: (payload) => {
        return axios.post('api/saveForm', payload, {headers: {token:Helpers.StorageService.getAccessToken() }});
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
};

export default UserServices;
