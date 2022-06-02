import * as UserTypes from "../actionTypes/UserTypes";
import Helpers from "../../Helpers";
function setUserDefaults() {
    return function (dispatch, getState) {
        dispatch({
            type: UserTypes.SET_USER_DEFAULTS,
        });
    };
}

function currentUser() {

        return function (dispatch, getState) {
            dispatch({
                type: UserTypes.SHOW_CURRENT_USER,
            });
            let currentUser = Helpers.StorageService.getUser();
            let token = Helpers.StorageService.getAccessToken();
            if (currentUser && token) {
                dispatch({
                    type: UserTypes.SHOW_CURRENT_USER_SUCCESS,
                    data: currentUser,
                });
            } else {
                if (token) {
                    Helpers.UserServices.getCurrentUser()
                        .then((response) => {
                            Helpers.StorageService.setUser(response.data.data);
                            dispatch({
                                type: UserTypes.SHOW_CURRENT_USER_SUCCESS,
                                data: response.data.data,
                            });
                        })
                        .catch((error) => {
                            if(error.response.data.message==='invalid or expired jwt'){
                                localStorage.clear();
                            }
                            dispatch({
                                type: UserTypes.SHOW_CURRENT_USER_FAILURE,
                                error: error.response.data,
                            });
                        });
                }
            }
        };

    

}

function handleUserChange(field, value) {
    return function (dispatch, getState) {
        dispatch({
            type: UserTypes.HANDLE_USER_CHANGE,
            data: value,
            field,
        });
    };
}

function checkUserValidation(value) {
    return function (dispatch, getState) {
        dispatch({
            type: UserTypes.VALIDATE_USER_FORM,
            data: value
        });
    };
}

function createUser(payload, cb) {
    return function (dispatch, getState) {
        dispatch({
            type: UserTypes.CREATE_USERS,
        });
        Helpers.UserServices.create(payload)
            .then((response) => {
                cb(response);
                if(response.data.status===true){
                    dispatch({
                        type: UserTypes.CREATE_USERS_SUCCESS,
                        data: response.data,
                    });
                }else{
                    dispatch({
                        type: UserTypes.CREATE_USERS_FAILURE,
                        error: response.data.message,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: UserTypes.CREATE_USERS_FAILURE,
                    error: error.response.data,
                });
            });
    };
}

function userList() {
    return function (dispatch, getState) {
        dispatch({
            type: UserTypes.LIST_USERS
        });
        Helpers.UserServices.getAll().then(response => {
            dispatch({
                type: UserTypes.LIST_USERS_SUCCESS,
                data: response.data.data,
                error:''
            });
        }).catch(error => {
            if(error.response){
                dispatch({
                    type: UserTypes.LIST_USERS_FAILURE,
                    error: error.response.data
                });
            }
        });
    }
}

function deleteUser(id,cp)
{
    return function (dispatch, getState) {
        dispatch({
            type: UserTypes.DELETE_USERS
        });
        Helpers.UserServices.remove(id).then(response => {
            if(response.data.status===true){
                dispatch({
                    type: UserTypes.DELETE_USERS_SUCCESS,
                    message: response.data.message,
                    id: id
                });
                cp(response)
            }else{
                dispatch({
                    type: UserTypes.DELETE_USERS_FAILURE,
                    error: response.data.message
                });
                cp(response)
            }
        }).catch(error => {
            dispatch({
                type: UserTypes.DELETE_USERS_FAILURE,
                error: error.response.data
            })
        });
    }
}

// function editUser(payload, id, cb) {
//     return function (dispatch, getState) {
//         dispatch({
//             type: UserTypes.EDIT_USERS,
//         });
//         Helpers.UserApi.userUpdateProfile(payload, id)
//             .then((response) => {
//                 Helpers.StorageService.setUser(response.data);
//                 dispatch({
//                     type: UserTypes.EDIT_USERS_SUCCESS,
//                     data: response.data,
//                 });
//                 cb();
//             })
//             .catch((error) => {
//                 dispatch({
//                     type: UserTypes.EDIT_USERS_FAILURE,
//                     error: error.response.data,
//                 });
//             });
//     };
// }


export { setUserDefaults, currentUser, handleUserChange,createUser,userList,checkUserValidation,deleteUser };
