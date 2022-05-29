import axios from "axios";
import Helpers from "./../../Helpers";
const FeeServices = {
    create: (payload) => {
        return axios.post(`/api/fee`,payload, {headers: {token:Helpers.StorageService.getAccessToken() }});
    },
    getAll: () => {
        return axios.get(`/api/fee`, {headers: {token:Helpers.StorageService.getAccessToken() }});
    },
    getById: (id) => {
        return axios.get(`/api/fee/${id}`, {headers: {token:Helpers.StorageService.getAccessToken() }});
    },
};

export default FeeServices;
