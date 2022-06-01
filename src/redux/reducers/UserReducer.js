import Helpers from "../../Helpers";
import * as UserTypes from "../actionTypes/UserTypes";

const initialState = {
  users: [],
  success_message: "",
  error_message: "",
  validation_errors: {},
  list_spinner: false,
  create_update_spinner: false,
  user: {
    name: '',
    email: '',
    photo: '',
    password: '',
    address: '',
    country: '',
    state: '',
    pincode: '',
    city: '',
    gender: '',
    father_name: '',
    father_mobile: '',
    dob: '',
    password: '',
    status: '',
    created_at: '',
    updated_at: '',
    deleted_at: '',
  },
  formError: {
    name: '',
    email: '',
    photo: '',
    country: '',
    state: '',
    pincode: '',
    city: '',
    gender: '',
    father: '',
    phone: '',
    dob: '',
    qualification: '',
    experience: '',
  }
}
const UserReducer = function (state = initialState, action) {
  switch (action.type) {
    case UserTypes.SET_USER_DEFAULTS:
      return {
        ...state,
        user: { ...state.user },
        success_message: "",
        error_message: "",
        validation_errors: {},
        list_spinner: false,
        create_update_spinner: false,
      };
    case UserTypes.HANDLE_USER_CHANGE:
      return handleChange(state, action);
    case UserTypes.VALIDATE_USER_FORM:
      return handleCheckFormValidation(state, action);
    case UserTypes.CREATE_USERS:
      return {
        ...state,
        create_update_spinner: true,
      };
    case UserTypes.CREATE_USERS_SUCCESS:
      return {
        ...state,
        create_update_spinner: false,
        user: action.data,
        success_message: action.data.message,
        error_message: "",
        validation_errors: {},
      };
    case UserTypes.CREATE_USERS_FAILURE:
      return {
        ...state,
        create_update_spinner: false,
        error_message: action.error.message,
        validation_errors: action.error.errors,
        success_message: "",
      };

    case UserTypes.LIST_USERS:
      return {
        ...state,
        list_spinner: true,
      };
    case UserTypes.LIST_USERS_SUCCESS:
      return {
        ...state,
        list_spinner: false,
        users: action.data,
        error_message: "",
      };
    case UserTypes.LIST_USERS_FAILURE:
      return {
        ...state,
        list_spinner: false,
        error_message: action.error,
      };
    case UserTypes.DELETE_USERS:
      return {
        ...state,
        list_spinner: true
      };
    case UserTypes.DELETE_USERS_SUCCESS:
      let users = state.users;
      users = state.users.filter(item => item._id != action.id);
      return {
        ...state,
        list_spinner: false,
        users: users,
        success_message: action.message,
        error_message: ''
      };
    case UserTypes.DELETE_USERS_FAILURE:
      return {
        ...state,
        list_spinner: false,
        error_message: action.error.message,
        success_message: ''
      };
    case UserTypes.SHOW_CURRENT_USER:
      return {
        ...state,
        create_update_spinner: true,
      };
    case UserTypes.SHOW_CURRENT_USER_SUCCESS:
      return {
        ...state,
        create_update_spinner: false,
        user: { ...state.user, ...action.data },
      };
    case UserTypes.SHOW_CURRENT_USER_FAILURE:
      return {
        ...state,
        create_update_spinner: false,
        error_message: action.error.message,
      };
    default:
      return state;
  }
};

function handleChange(state, action) {
  return {
    ...state,
    user: { ...state.user, [action.field]: action.data },
    formError:{...state.formError,[action.field]:Helpers.Forms.userForm(action.field,action.data)}
  };
}

function handleCheckFormValidation(state,action){
  return {
    ...state,
    formError:{...state.formError,...action.data}
  };
}


export default UserReducer;