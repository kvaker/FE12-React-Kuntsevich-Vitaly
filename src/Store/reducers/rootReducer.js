import { combineReducers } from "redux";
import userReducer from './userReducer';
import taskListReducer from "/src/Store/reducers/taskListReducer";

const rootReducer = combineReducers({
    userReducer,
    taskListReducer
})

export default rootReducer;