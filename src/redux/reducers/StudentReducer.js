import Helpers from "../../Helpers";
import * as StudentTypes from "../actionTypes/StudentTypes";
const initialState = {
  value: 0,
  students: [],
  success_message: "",
  error_message: "",
  validation_errors: {},
  list_spinner: false,
  create_update_spinner: false,
  student: {
    name: '',
    email: '',
    photo: '',
    address: '',
    country: '',
    state: '',
    pincode: '',
    city: '',
    gender: '',
    class: '',
    father_name: '',
    father_mobile: '',
    dob: '',
    status: '',
    created_at: '',
    updated_at: '',
    deleted_at: '',
    occupation: ''
  },
  formError:{
    name: '',
    email: '',
    photo: '',
    country: '',
    state: '',
    pincode: '',
    city: '',
    gender: '',
    class: '',
    father_name: '',
    father_mobile: '',
    dob: '',
    occupation: ''
  }
}

const StudentReducer = function (state = initialState, action) {
  switch (action.type) {
    case StudentTypes.SET_STUDENT_DEFAULTS:
      return {
        ...state,
        student: { ...state.student },
        success_message: "",
        error_message: "",
        validation_errors: {},
        list_spinner: false,
        create_update_spinner: false,
      };

    case StudentTypes.HANDLE_STUDENT_CHANGE:
      return handleChange(state, action);
    case StudentTypes.VALIDATE_STUDENT_FORM:
      return handleCheckFormValidation(state, action);
    case StudentTypes.CREATE_STUDENTS:
      return {
        ...state,
        create_update_spinner: true,
      };
    case StudentTypes.CREATE_STUDENTS_SUCCESS:
      return {
        ...state,
        create_update_spinner: false,
        student: action.data,
        success_message: action.data.message,
        error_message: "",
        validation_errors: {},
      };
    case StudentTypes.CREATE_STUDENTS_FAILURE:
      return {
        ...state,
        create_update_spinner: false,
        error_message: action.error.message,
        validation_errors: action.error.errors,
        success_message: "",
      };

    case StudentTypes.LIST_STUDENTS:
      return {
        ...state,
        list_spinner: true,
      };
    case StudentTypes.LIST_STUDENTS_SUCCESS:
      return {
        ...state,
        list_spinner: false,
        students: action.data,
        error_message: "",
      };
    case StudentTypes.LIST_STUDENTS_FAILURE:
      return {
        ...state,
        list_spinner: false,
        error_message: action.error,
      };
    default:
      return state;
  }
};
 
function handleChange(state, action) {
  return {
    ...state,
    student: { ...state.student, [action.field]: action.data },
    formError:{...state.formError,[action.field]:Helpers.Forms.studentForm(action.field,action.data)}
  };
}

function handleCheckFormValidation(state,action){
  return {
    ...state,
    formError:{...state.formError,...action.data}
  };
}

export default StudentReducer;
