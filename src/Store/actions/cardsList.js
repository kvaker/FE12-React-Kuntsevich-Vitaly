import { CARD_LIST_ACTIONS } from "/src/Store/actionTypes";

export const newCard = (newTaskName, newTaskDescription, newTaskUser, state, index) =>
{return ({type: CARD_LIST_ACTIONS.add, payload: {taskName: newTaskName, taskDescription: newTaskDescription,
        userName: newTaskUser, state: state, index: index}})}

export const removeCard = (index) => {return ({type: CARD_LIST_ACTIONS.remove, payload: index})};

export const changeName = (changeTaskName, changeTaskDescription, index) => {return ({type: CARD_LIST_ACTIONS.change,
    payload: {taskName: changeTaskName, taskDescription: changeTaskDescription, index: index}})}
