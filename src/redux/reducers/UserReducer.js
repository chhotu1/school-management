import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  users:[],
  success_message: "",
  error_message: "",
  validation_errors: {},
  list_spinner: false,
  create_update_spinner: false,
  user:{
      name:'',
      email:'',
      password:'',      
  }

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    inputChange:(state,action)=>{
        const key = Object.keys(action.payload)[0];
        return {
            ...state,
            user: { ...state.user, [key]: action.payload[key] },
        };
    }
  },
})

export const { inputChange } = userSlice.actions
export default userSlice.reducer