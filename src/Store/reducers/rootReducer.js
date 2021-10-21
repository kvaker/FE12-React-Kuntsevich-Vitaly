import { combineReducers } from "redux";
import taskListReducer from "/src/Store/reducers/taskListReducer";

const rootReducer = combineReducers({
    taskListReducer
})

export default rootReducer;