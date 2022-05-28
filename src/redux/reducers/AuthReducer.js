import Helpers from "../../Helpers";
import * as AuthTypes from "../actionTypes/AuthTypes";

const initialState = {
  isToken: false
};

const authReducer = function (state = initialState, action) {
  switch (action.type) {
    case AuthTypes.SET_SIGNUP_DEFAULTS:
      let token = Helpers.StorageService.getAccessToken();
      return {
        ...state,
        isToken: token &&token!==null?true:false,
      };
    default:
      return state;
  }
};




export default authReducer;
