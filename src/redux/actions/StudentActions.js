import * as StudentTypes from "../actionTypes/StudentTypes";
import Helpers from "../../Helpers";
function setStudentDefaults() {
    return function (dispatch, getState) {
        dispatch({
            type: StudentTypes.SET_STUDENT_DEFAULTS,
        });
    };
}

function handleStudentChange(field, value) {
    return function (dispatch, getState) {
        dispatch({
            type: StudentTypes.HANDLE_STUDENT_CHANGE,
            data: value,
            field,
        });
    };
}

function checkStudentValidation(value) {
    return function (dispatch, getState) {
        dispatch({
            type: StudentTypes.VALIDATE_STUDENT_FORM,
            data: value
        });
    };
}

function createStudent(payload, cb) {

    return function (dispatch, getState) {
        dispatch({
            type: StudentTypes.CREATE_STUDENTS,
        });
        Helpers.StudentService.create(payload)
            .then((response) => {
                dispatch({
                    type: StudentTypes.CREATE_STUDENTS_SUCCESS,
                    data: response.data,
                });
                cb();
            })
            .catch((error) => {
                dispatch({
                    type: StudentTypes.CREATE_STUDENTS_FAILURE,
                    error: error.response.data,
                });
            });
    };
}


function studentList() {
    return function (dispatch, getState) {
        dispatch({
            type: StudentTypes.LIST_STUDENTS
        });
        Helpers.StudentService.getStudent().then(response => {
            console.log(response,'=======')
            dispatch({
                type: StudentTypes.LIST_STUDENTS_SUCCESS,
                data: response.data.data,
                error:''
            });
        }).catch(error => {
            if(error.response){
                dispatch({
                    type: StudentTypes.LIST_STUDENTS_FAILURE,
                    error: error.response.data
                });
            }
        });
    }
}

function deleteStudent(id,cp)
{
    return function (dispatch, getState) {
        dispatch({
            type: StudentTypes.DELETE_STUDENTS
        });
        Helpers.StudentService.remove(id).then(response => {
            if(response.data.status===true){
                dispatch({
                    type: StudentTypes.DELETE_STUDENTS_SUCCESS,
                    message: response.data.message,
                    id: id
                });
                cp(response)
            }else{
                dispatch({
                    type: StudentTypes.DELETE_STUDENTS_FAILURE,
                    error: response.data.message
                });
                cp(response)
            }
        }).catch(error => {
            dispatch({
                type: StudentTypes.DELETE_STUDENTS_FAILURE,
                error: error.response.data
            })
        });
    }
}

export { setStudentDefaults, handleStudentChange,createStudent,studentList,checkStudentValidation,deleteStudent };
