import axios from "axios";
import Helpers from "./../../Helpers";
const UserServices = {
    create: (payload) => {
        return axios.post('api/saveForm', payload, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.token")}});
    },
    getAll: () => {
        return axios.get('/api/users', {headers: {token:Helpers.StorageService.getAccessToken() }});
    },
};

export default UserServices;
