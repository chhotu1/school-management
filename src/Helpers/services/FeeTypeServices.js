import axios from "axios";
import Helpers from "./../../Helpers";
const FeeTypeServices = {
    create: (payload) => {
        return axios.post(`/api/fee-type`,payload, {headers: {token:Helpers.StorageService.getAccessToken() }});
    },
    getAll: () => {
        return axios.get(`/api/fee-type`, {headers: {token:Helpers.StorageService.getAccessToken() }});
    },
    getById: (id) => {
        return axios.get(`/api/fee-type/${id}`, {headers: {token:Helpers.StorageService.getAccessToken() }});
    },
    remove: (id) => {
        return axios.delete(`/api/fee-type/${id}`, {headers:{token:Helpers.StorageService.getAccessToken() } });
    },
};

export default FeeTypeServices;
