import { CARD_LIST_ACTIONS } from "/src/Store/actionTypes";
import { TASK_STATUS } from "../../Constants/tasksStatus";

const taskListReducer = (state, action) => {
    let newTaskList = [];
    let newTask = {};
    let resultTaskName = '';
    let resultTaskDescription = '';

    switch (action.type) {
        case CARD_LIST_ACTIONS.add:
            newTaskList = [...state.taskList];
            newTaskList.push({
                taskName: action.payload.name,
                isDone: false,
                taskDescription: action.payload.description,
                state: action.payload.state,
            });
            return { ...state, taskList: newTaskList };

        case CARD_LIST_ACTIONS.toTop:
            newTaskList = [...state.taskList];
            /* newTaskList.sort((x, y) => (x == newTaskList[action.payload.index]
              ? -1
                : y == newTaskList[action.payload.index]
                ? 1
                : 0)); */

            newTaskList.sort((x, y) => {
                if (x === newTaskList[action.payload.index]) {
                    return -1;
                } if (y === newTaskList[action.payload.index]) {
                    return 1;
                } return 0;
            });
            return { ...state, taskList: newTaskList };

        case CARD_LIST_ACTIONS.toBottom:
            newTaskList = [...state.taskList];
            newTaskList.sort((x, y) => {
                if (y === newTaskList[action.payload.index]) {
                    return -1;
                } if (x === newTaskList[action.payload.index]) {
                    return 1;
                } return 0;
            });
            return { ...state, taskList: newTaskList };

        case CARD_LIST_ACTIONS.delete:
            newTaskList = [...state.taskList];
            newTaskList.splice(action.payload.index, 1);
            return { ...state, taskList: newTaskList };

        case CARD_LIST_ACTIONS.done:
            newTaskList = [...state.taskList];
            newTask = { ...newTaskList[action.payload.index] };
            newTask.isDone = true;
            newTask.state = TASK_STATUS.done;
            newTaskList.splice(action.payload.index, 1, newTask);
            return { ...state, taskList: newTaskList };

        case CARD_LIST_ACTIONS.change:
            resultTaskName = action.payload.name;
            resultTaskDescription = action.payload.description;
            newTaskList = [...state.taskList];
            newTask = { ...newTaskList[action.payload.index] };
            newTask.taskName = resultTaskName;
            newTask.taskDescription = resultTaskDescription;
            newTaskList.splice(action.payload.index, 1, newTask);
            return { ...state, taskList: newTaskList };

        default:
            return { ...state };
    }
};

export default taskListReducer;