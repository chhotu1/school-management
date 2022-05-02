
const StorageService = {
    setAccessToken:(value) =>{
        localStorage.setItem('ClientAccessToken', JSON.stringify(value));
    },
    getAccessToken:() =>{
        return JSON.parse(localStorage.getItem('ClientAccessToken'));
    },
    removeAccessToken:() =>{
        localStorage.removeItem('ClientAccessToken');
    },
    setUser:(value) =>{
        localStorage.setItem('user', JSON.stringify(value));
    },
    getUser:() =>{
        return JSON.parse(localStorage.getItem('user'));
    },
    removeUser:() =>{
        localStorage.removeItem('user');
    },
};
export default StorageService;
