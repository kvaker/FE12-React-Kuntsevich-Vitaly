import { combineReducers } from "redux";
import userReducer from './userReducer';
import taskListReducer from "/src/Store/reducers/taskListReducer";
import foodReducer from './foodReducer'

const rootReducer = combineReducers({
    userReducer,
    taskListReducer,
    foodReducer,
})

export default rootReducer;