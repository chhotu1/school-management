import { combineReducers } from 'redux';
import counterSlice from './counterSlice';
import UserReducer from './UserReducer';
import StudentReducer from './StudentReducer';
import AuthReducer from './AuthReducer'
const RootReducer = combineReducers({
    counter: counterSlice,
    user:UserReducer,
    student:StudentReducer,
    auth:AuthReducer
});

export default RootReducer;