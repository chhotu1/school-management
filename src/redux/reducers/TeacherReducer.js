import Helpers from "../../Helpers";
import * as TeacherTypes from "../actionTypes/TeacherTypes";
const initialState = {
  value: 0,
  teachers: [],
  success_message: "",
  error_message: "",
  validation_errors: {},
  list_spinner: false,
  create_update_spinner: false,
  teacher: {
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

const TeacherReducer = function (state = initialState, action) {
  switch (action.type) {
    case TeacherTypes.SET_TEACHER_DEFAULTS:
      return {
        ...state,
        teacher: { ...state.teacher },
        success_message: "",
        error_message: "",
        validation_errors: {},
        list_spinner: false,
        create_update_spinner: false,
      };

    case TeacherTypes.HANDLE_TEACHER_CHANGE:
      return handleChange(state, action);
    case TeacherTypes.VALIDATE_TEACHER_FORM:
      return handleCheckFormValidation(state, action);
    case TeacherTypes.CREATE_TEACHERS:
      return {
        ...state,
        create_update_spinner: true,
      };
    case TeacherTypes.CREATE_TEACHERS_SUCCESS:
      return {
        ...state,
        create_update_spinner: false,
        teacher: action.data,
        success_message: action.data.message,
        error_message: "",
        validation_errors: {},
      };
    case TeacherTypes.CREATE_TEACHERS_FAILURE:
      return {
        ...state,
        create_update_spinner: false,
        error_message: action.error.message,
        validation_errors: action.error.errors,
        success_message: "",
      };

    case TeacherTypes.LIST_TEACHERS:
      return {
        ...state,
        list_spinner: true,
      };
    case TeacherTypes.LIST_TEACHERS_SUCCESS:
      return {
        ...state,
        list_spinner: false,
        teachers: action.data,
        error_message: "",
      };
    case TeacherTypes.LIST_TEACHERS_FAILURE:
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
    teacher: { ...state.teacher, [action.field]: action.data },
    formError:{...state.formError,[action.field]:Helpers.Forms.teacherForm(action.field,action.data)}
  };
}

function handleCheckFormValidation(state,action){
  return {
    ...state,
    formError:{...state.formError,...action.data}
  };
}

export default TeacherReducer;
