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
                dispatch({
                    type: FeeTypes.CREATE_FEES_SUCCESS,
                    data: response.data,
                });
                cb();
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

export { setFeeDefaults, handleFeeChange,createFee,feeList,checkFeeValidation };
