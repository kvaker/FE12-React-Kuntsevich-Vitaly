import { CARD_LIST_ACTIONS } from "/src/Store/actionTypes";
import { TASK_STATUS } from "../../Constants/tasksStatus";

const taskListReducer = (state, action) => {
    let newTaskList = [];
    switch (action.type) {
        case (CARD_LIST_ACTIONS.add):
            newTaskList = [...state.taskList];
            newTaskList.push({
                taskName: action.payload.taskName,
                taskDescription: action.payload.taskDescription,
                isDone: false,
                userName: action.payload.userName,
                state: action.payload.state,
                index: action.payload.index,
            });
            return {...state,
                taskList: newTaskList};

        case (CARD_LIST_ACTIONS.delete):
            newTaskList = [...state.taskList];
            newTaskList.splice(action.payload.index, 1);
            return {...state,
                taskList: newTaskList};

        case (CARD_LIST_ACTIONS.done):
            newTaskList = [...state.taskList];
            let newTask = {...newTaskList[action.payload.index]};
            newTask.isDone = true;
            newTask.state = TASK_STATUS.done;
            newTaskList.splice(action.payload.index, 1, newTask);
            return {...state,
                taskList: newTaskList};

        case CARD_LIST_ACTIONS.change:
            let resultTaskName = action.payload.taskName;
            let resultTaskDescription = action.payload.taskDescription;
            newTaskList = [...state.taskList];
            newTaskList[action.payload.index].taskName = resultTaskName;
            newTaskList[action.payload.index].taskDescription = resultTaskDescription;
            return {...state,
                taskList: newTaskList};

        default: return {... state}
    }
}

export default taskListReducer;