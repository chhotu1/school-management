import Helpers from "../../Helpers";
import * as FeeTypeTypes from "../actionTypes/FeeTypeTypes";
const initialState = {
  feeTypes: [],
  success_message: "",
  error_message: "",
  validation_errors: {},
  list_spinner: false,
  create_update_spinner: false,
  feeType: {
    title: '',
    status: '',
    created_at: '',
    updated_at: '',
    deleted_at: '',
    amount: '',
  },
  formError: {
    title: '',
    amount: ''
  }
}

const FeeTypeReducer = function (state = initialState, action) {
  switch (action.type) {
    case FeeTypeTypes.SET_FEE_TYPE_DEFAULTS:
      return {
        ...state,
        feeType: { ...state.feeType },
        success_message: "",
        error_message: "",
        validation_errors: {},
        list_spinner: false,
        create_update_spinner: false,
      };

    case FeeTypeTypes.HANDLE_FEE_TYPE_CHANGE:
      return handleChange(state, action);
    case FeeTypeTypes.VALIDATE_FEE_TYPE_FORM:
      return handleCheckFormValidation(state, action);
    case FeeTypeTypes.CREATE_FEE_TYPES:
      return {
        ...state,
        create_update_spinner: true,
      };
    case FeeTypeTypes.CREATE_FEE_TYPES_SUCCESS:
      return {
        ...state,
        create_update_spinner: false,
        feeType: action.data,
        success_message: action.data.message,
        error_message: "",
        validation_errors: {},
      };
    case FeeTypeTypes.CREATE_FEE_TYPES_FAILURE:
      return {
        ...state,
        create_update_spinner: false,
        error_message: action.error.message,
        validation_errors: action.error.errors,
        success_message: "",
      };

    case FeeTypeTypes.LIST_FEE_TYPES:
      return {
        ...state,
        list_spinner: true,
      };
    case FeeTypeTypes.LIST_FEE_TYPES_SUCCESS:
      return {
        ...state,
        list_spinner: false,
        feeTypes: action.data,
        error_message: "",
      };
    case FeeTypeTypes.LIST_FEE_TYPES_FAILURE:
      return {
        ...state,
        list_spinner: false,
        error_message: action.error,
      };
    case FeeTypeTypes.DELETE_FEE_TYPES:
      return {
        ...state,
        list_spinner: true
      };
    case FeeTypeTypes.DELETE_FEE_TYPES_SUCCESS:
      let feeTypes = state.feeTypes;
      feeTypes = state.feeTypes.filter(item => item._id != action.id);
      return {
        ...state,
        list_spinner: false,
        feeTypes: feeTypes,
        success_message: action.message,
        error_message: ''
      };
    case FeeTypeTypes.DELETE_FEE_TYPES_FAILURE:
      return {
        ...state,
        list_spinner: false,
        error_message: action.error.message,
        success_message: ''
      };
    default:
      return state;
  }
};

function handleChange(state, action) {
  return {
    ...state,
    feeType: { ...state.feeType, [action.field]: action.data },
    formError: { ...state.formError, [action.field]: Helpers.Forms.feeTypeForm(action.field, action.data) }
  };
}

function handleCheckFormValidation(state, action) {
  return {
    ...state,
    formError: { ...state.formError, ...action.data }
  };
}

export default FeeTypeReducer;
