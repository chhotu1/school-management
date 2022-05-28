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
    address: '',
    country: '',
    state: '',
    pincode: '',
    city: '',
    gender: '',
    father_name: '',
    father_mobile: '',
    dob: '',
    status: '',
    created_at: '',
    updated_at: '',
    deleted_at: '',
  },
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
    case UserTypes.SHOW_CURRENT_USER:
      return {
        ...state,
        create_update_spinner: true,
      };
    case UserTypes.SHOW_CURRENT_USER_SUCCESS:
      return {
        ...state,
        create_update_spinner: false,
        user: { ...state.user,...action.data },
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


export default UserReducer;

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     inputChange:(state,action)=>{
//         const key = Object.keys(action.payload)[0];
//         return {
//             ...state,
//             user: { ...state.user, [key]: action.payload[key] },
//         };
//     }
//   },
// })

// export const { inputChange } = userSlice.actions
// export default userSlice.reducer