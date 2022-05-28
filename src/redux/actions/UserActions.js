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





export { setUserDefaults, currentUser, handleUserChange };
