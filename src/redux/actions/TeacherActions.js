import * as TeacherTypes from "../actionTypes/TeacherTypes";
import Helpers from "../../Helpers";

function setTeacherDefaults() {
    return function (dispatch, getState) {
        dispatch({
            type: TeacherTypes.SET_TEACHER_DEFAULTS,
        });
    };
}

function handleTeacherChange(field, value) {
    return function (dispatch, getState) {
        dispatch({
            type: TeacherTypes.HANDLE_TEACHER_CHANGE,
            data: value,
            field,
        });
    };
}

function checkTeacherValidation(value) {
    return function (dispatch, getState) {
        dispatch({
            type: TeacherTypes.VALIDATE_TEACHER_FORM,
            data: value
        });
    };
}

function createTeacher(payload, cb) {
    return function (dispatch, getState) {
        dispatch({
            type: TeacherTypes.CREATE_TEACHERS,
        });
        Helpers.TeacherServices.create(payload)
            .then((response) => {
                dispatch({
                    type: TeacherTypes.CREATE_TEACHERS_SUCCESS,
                    data: response.data,
                });
                cb();
            })
            .catch((error) => {
                dispatch({
                    type: TeacherTypes.CREATE_TEACHERS_FAILURE,
                    error: error.response.data,
                });
            });
    };
}


function teacherList() {
    return function (dispatch, getState) {
        dispatch({
            type: TeacherTypes.LIST_TEACHERS
        });
        Helpers.TeacherServices.getTeacher().then(response => {
            dispatch({
                type: TeacherTypes.LIST_TEACHERS_SUCCESS,
                data: response.data.data,
                error:''
            });
        }).catch(error => {
            if(error.response){
                dispatch({
                    type: TeacherTypes.LIST_TEACHERS_FAILURE,
                    error: error.response.data
                });
            }
        });
    }
}

export { setTeacherDefaults, handleTeacherChange,createTeacher,teacherList,checkTeacherValidation };
