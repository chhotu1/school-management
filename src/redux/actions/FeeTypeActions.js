import * as FeeTypeTypes from "../actionTypes/FeeTypeTypes";
import Helpers from "../../Helpers";

function setFeeTypeDefaults() {
    return function (dispatch, getState) {
        dispatch({
            type: FeeTypeTypes.SET_FEE_TYPE_DEFAULTS,
        });
    };
}

function handleFeeTypeChange(field, value) {
    return function (dispatch, getState) {
        dispatch({
            type: FeeTypeTypes.HANDLE_FEE_TYPE_CHANGE,
            data: value,
            field,
        });
    };
}

function checkFeeTypeValidation(value) {
    return function (dispatch, getState) {
        dispatch({
            type: FeeTypeTypes.VALIDATE_FEE_TYPE_FORM,
            data: value
        });
    };
}

function createFeeType(payload, cb) {
    return function (dispatch, getState) {
        dispatch({
            type: FeeTypeTypes.CREATE_FEE_TYPES,
        });
        Helpers.FeeTypeServices.create(payload)
            .then((response) => {
                if(response.data.status===true){
                    dispatch({
                        type: FeeTypeTypes.CREATE_FEE_TYPES_SUCCESS,
                        data: response.data,
                    });
                    cb(response);
                }else{
                    cb(response);
                    dispatch({
                        type: FeeTypeTypes.CREATE_FEE_TYPES_FAILURE,
                        error: response.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: FeeTypeTypes.CREATE_FEE_TYPES_FAILURE,
                    error: error.response.data,
                });
            });
    };
}


function feeTypeList() {
    return function (dispatch, getState) {
        dispatch({
            type: FeeTypeTypes.LIST_FEE_TYPES
        });
        Helpers.FeeTypeServices.getAll().then(response => {
            dispatch({
                type: FeeTypeTypes.LIST_FEE_TYPES_SUCCESS,
                data: response.data.data,
                error:''
            });
        }).catch(error => {
            if(error.response){
                dispatch({
                    type: FeeTypeTypes.LIST_FEE_TYPES_FAILURE,
                    error: error.response.data
                });
            }
        });
    }
}

function deleteFeeType(id,cp)
{
    return function (dispatch, getState) {
        dispatch({
            type: FeeTypeTypes.DELETE_FEE_TYPES
        });
        Helpers.FeeTypeServices.remove(id).then(response => {
            if(response.data.status===true){
                dispatch({
                    type: FeeTypeTypes.DELETE_FEE_TYPES_SUCCESS,
                    message: response.data.message,
                    id: id
                });
                cp(response)
            }else{
                dispatch({
                    type: FeeTypeTypes.DELETE_FEE_TYPES_FAILURE,
                    error: response.data.message
                });
                cp(response)
            }
        }).catch(error => {
            dispatch({
                type: FeeTypeTypes.DELETE_FEE_TYPES_FAILURE,
                error: error.response.data
            })
        });
    }
}

export { setFeeTypeDefaults, handleFeeTypeChange,createFeeType,feeTypeList,checkFeeTypeValidation,deleteFeeType };
