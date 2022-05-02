import axios from "axios";
const UserServices = {
    create: (payload) => {
        return axios.post('api/saveForm', payload, {headers: {Authorization: 'Bearer ' + localStorage.getItem("user.token")}});
    },
};

export default UserServices;
