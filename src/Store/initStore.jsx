import { applyMiddleware, createStore } from 'redux';
import { newCard } from './actions/cardsList';
import { TASK_STATUS } from '../constants/tasksStatus';
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import rootReducer from './reducers/rootReducer';
import taskListReducer from "./reducers/taskListReducer"

let newTaskList = [{ taskName: 'task 1', taskDescription: 'Define more tags in components.', isDone: false,
    userName: 'Jon', state: TASK_STATUS.toDo },
    { taskName: 'task 2', taskDescription: 'Add more user avatars.', isDone: false,
        userName: 'Jack', state: TASK_STATUS.progress },
    { taskName: "Task 3", isDone: true, taskDescription: "Task 3 description",
        userName: 'Mark', state: TASK_STATUS.done },
]

const initialState = {taskListReducer: {taskList: newTaskList}};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = []
const middlewareEnhancer = applyMiddleware(...middlewares)
const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)

export const store = createStore(
    persistedReducer,
    initialState,
    composedEnhancers
);

export const persistor = persistStore(store)