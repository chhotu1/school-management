import { combineReducers } from 'redux';
import counterSlice from './counterSlice';
import UserReducer from './UserReducer';
const RootReducer = combineReducers({
    counter: counterSlice,
    user:UserReducer
});

export default RootReducer;