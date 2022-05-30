import Helpers from "../../Helpers";
import * as FeeTypes from "../actionTypes/FeeTypes";
const initialState = {
  fees: [],
  success_message: "",
  error_message: "",
  validation_errors: {},
  list_spinner: false,
  create_update_spinner: false,
  fee: {
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

const FeeReducer = function (state = initialState, action) {
  switch (action.type) {
    case FeeTypes.SET_FEE_DEFAULTS:
      return {
        ...state,
        fee: { ...state.fee },
        success_message: "",
        error_message: "",
        validation_errors: {},
        list_spinner: false,
        create_update_spinner: false,
      };

    case FeeTypes.HANDLE_FEE_CHANGE:
      return handleChange(state, action);
    case FeeTypes.VALIDATE_FEE_FORM:
      return handleCheckFormValidation(state, action);
    case FeeTypes.CREATE_FEES:
      return {
        ...state,
        create_update_spinner: true,
      };
    case FeeTypes.CREATE_FEES_SUCCESS:
      return {
        ...state,
        create_update_spinner: false,
        fee: action.data,
        success_message: action.data.message,
        error_message: "",
        validation_errors: {},
      };
    case FeeTypes.CREATE_FEES_FAILURE:
      return {
        ...state,
        create_update_spinner: false,
        error_message: action.error.message,
        validation_errors: action.error.errors,
        success_message: "",
      };

    case FeeTypes.LIST_FEES:
      return {
        ...state,
        list_spinner: true,
      };
    case FeeTypes.LIST_FEES_SUCCESS:
      return {
        ...state,
        list_spinner: false,
        fees: action.data,
        error_message: "",
      };
    case FeeTypes.LIST_FEES_FAILURE:
      return {
        ...state,
        list_spinner: false,
        error_message: action.error,
      };
    case FeeTypes.DELETE_FEES:
      return {
        ...state,
        list_spinner: true
      };
    case FeeTypes.DELETE_FEES_SUCCESS:
      let fees = state.fees;
      fees = state.fees.filter(item => item._id != action.id);
      return {
        ...state,
        list_spinner: false,
        fees: fees,
        success_message: action.message,
        error_message: ''
      };
    case FeeTypes.DELETE_FEES_FAILURE:
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
    fee: { ...state.fee, [action.field]: action.data },
    formError: { ...state.formError, [action.field]: Helpers.Forms.feeForm(action.field, action.data) }
  };
}

function handleCheckFormValidation(state, action) {
  return {
    ...state,
    formError: { ...state.formError, ...action.data }
  };
}

export default FeeReducer;
