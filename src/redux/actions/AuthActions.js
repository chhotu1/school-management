import * as AuthTypes from '../actionTypes/AuthTypes';

function setAuthDefaults() {
    console.log('token data set')
    return function (dispatch, getState) {
        dispatch({
            type: AuthTypes.SET_SIGNUP_DEFAULTS
        });
    }
}

function handleTokenChange(field, value, checked) {
    
    return function (dispatch, getState) {
        dispatch({
            type: AuthTypes.HANDLE_TOKEN_CHANGE,
            data: value,
        });
    }
}

export {
    setAuthDefaults,
    handleTokenChange,
};