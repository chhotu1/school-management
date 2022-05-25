import { combineReducers } from 'redux';
import counterSlice from './counterSlice';
import UserReducer from './UserReducer';
import StudentReducer from './StudentReducer';
const RootReducer = combineReducers({
    counter: counterSlice,
    user:UserReducer,
    student:StudentReducer
});

export default RootReducer;