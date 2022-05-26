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

function createStudent(payload, cb) {
    console.log(payload,'payload data')
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

export { setStudentDefaults, handleStudentChange,createStudent,studentList };
