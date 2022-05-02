import axios from "axios";
const AuthServices = {
    login: (payload) => {
        return axios.post('/api/users/login', payload);
    },
    register:(payload)=>{
        return axios.post('/api/users/register',payload);
    }
};

export default AuthServices;
