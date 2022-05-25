import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: 0,
  students:[],
  success_message: "",
  error_message: "",
  validation_errors: {},
  list_spinner: false,
  create_update_spinner: false,
  student:{
      name:'',
      email:'',
      photo:'',
      address:'',
      country:'',
      state:'',
      pincode:'',
      city:'',
      gender:'',
      class:'',
      father_name:'',
      father_mobile:'',
      dob:'',
      status:'',
      created_at:'',
      updated_at:'',
      deleted_at: '', 
      occupation:''   
  }
}

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    inputChange:(state,action)=>{
        const key = Object.keys(action.payload)[0];
        return {
            ...state,
            student: { ...state.student, [key]: action.payload[key] },
        };
    }
  },
})

export const { inputChange } = studentSlice.actions
export default studentSlice.reducer