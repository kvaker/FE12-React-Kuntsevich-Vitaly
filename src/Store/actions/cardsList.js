import { CARD_LIST_ACTIONS } from "/src/Store/actionTypes";

export const newCard = (newName, newDescription, state) => ({
    type: CARD_LIST_ACTIONS.add,
    payload: {
        name: newName,
        description: newDescription,
        state,
    },
});

export const toTopCard = (index) => ({
    type: CARD_LIST_ACTIONS.toTop,
    payload: {
        index,
    },
});

export const toBottomCard = (index) => ({
    type: CARD_LIST_ACTIONS.toBottom,
    payload: {
        index,
    },
});

export const deleteCard = (index) => ({
    type: CARD_LIST_ACTIONS.delete,
    payload: {
        index,
    },
});

export const doneCard = (index) => ({
    type: CARD_LIST_ACTIONS.done,
    payload: {
        index,
    },
});

export const changeCard = (index, taskName, taskDescription) => ({
    type: CARD_LIST_ACTIONS.change,
    payload: {
        index,
        name: taskName,
        description: taskDescription,
    },
});