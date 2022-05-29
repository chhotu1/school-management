import { combineReducers } from 'redux';
import counterSlice from './counterSlice';
import UserReducer from './UserReducer';
import StudentReducer from './StudentReducer';
import TeacherReducer from './TeacherReducer';
import AuthReducer from './AuthReducer'
const RootReducer = combineReducers({
    counter: counterSlice,
    user:UserReducer,
    student:StudentReducer,
    teacher:TeacherReducer,
    auth:AuthReducer
});

export default RootReducer;