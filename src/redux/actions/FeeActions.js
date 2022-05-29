import * as FeeTypes from "../actionTypes/FeeTypes";
import Helpers from "../../Helpers";

function setFeeDefaults() {
    return function (dispatch, getState) {
        dispatch({
            type: FeeTypes.SET_FEE_DEFAULTS,
        });
    };
}

function handleFeeChange(field, value) {
    return function (dispatch, getState) {
        dispatch({
            type: FeeTypes.HANDLE_FEE_CHANGE,
            data: value,
            field,
        });
    };
}

function checkFeeValidation(value) {
    return function (dispatch, getState) {
        dispatch({
            type: FeeTypes.VALIDATE_FEE_FORM,
            data: value
        });
    };
}

function createFee(payload, cb) {
    return function (dispatch, getState) {
        dispatch({
            type: FeeTypes.CREATE_FEES,
        });
        Helpers.FeeServices.create(payload)
            .then((response) => {
                if(response.data.status===true){
                    dispatch({
                        type: FeeTypes.CREATE_FEES_SUCCESS,
                        data: response.data,
                    });
                    cb(response);
                }else{
                    cb(response);
                    dispatch({
                        type: FeeTypes.CREATE_FEES_FAILURE,
                        error: response.data,
                    });
                }
            })
            .catch((error) => {
                dispatch({
                    type: FeeTypes.CREATE_FEES_FAILURE,
                    error: error.response.data,
                });
            });
    };
}


function feeList() {
    return function (dispatch, getState) {
        dispatch({
            type: FeeTypes.LIST_FEES
        });
        Helpers.FeeServices.getAll().then(response => {
            dispatch({
                type: FeeTypes.LIST_FEES_SUCCESS,
                data: response.data.data,
                error:''
            });
        }).catch(error => {
            if(error.response){
                dispatch({
                    type: FeeTypes.LIST_FEES_FAILURE,
                    error: error.response.data
                });
            }
        });
    }
}

function deleteFee(id)
{
    return function (dispatch, getState) {
        dispatch({
            type: FeeTypes.DELETE_FEES
        });
        Helpers.FeeServices.remove(id).then(response => {
            console.log(response,'response')
            dispatch({
                type: FeeTypes.DELETE_FEES_SUCCESS,
                message: response.data.message,
                id: id
            });
        }).catch(error => {
            dispatch({
                type: FeeTypes.DELETE_FEES_FAILURE,
                error: error.response.data
            })
        });
    }
}

export { setFeeDefaults, handleFeeChange,createFee,feeList,checkFeeValidation,deleteFee };
