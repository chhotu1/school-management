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
  };
}

export default StudentReducer;


/*
export const createStudent = createAsyncThunk(
  "student_create",
  async (payload) => {
    const response = await Helpers.StudentService.create(payload);
    return response.data;
  }
);

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

  extraReducers: {
    [createStudent.pending]: () => {
      console.log("Pending");
    },
    [createStudent.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [createStudent.rejected]: () => {
      console.log("Rejected!");
    },
  },
})

export const { inputChange } = studentSlice.actions
export default studentSlice.reducer
*/