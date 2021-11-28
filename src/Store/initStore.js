import { applyMiddleware, createStore } from 'redux';
import { newCard } from './actions/cardsList';
import { TASK_STATUS } from '../Constants/tasksStatus';
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import rootReducer from './reducers/rootReducer';
import taskListReducer from "./reducers/taskListReducer"

const newUser = [];
const newFoodList = [];

const newTaskList = [
    {
        taskName: 'Task 1',
        isDone: false,
        taskDescription: 'Task 1 description',
        state: TASK_STATUS.toDo,
    },
    {
        taskName: 'Task 2',
        isDone: false,
        taskDescription: 'Task 1 description',
        state: TASK_STATUS.progress,
    },
    {
        taskName: 'Task 3',
        isDone: true,
        taskDescription: 'Task 3 description',
        state: TASK_STATUS.done,
    },
];

const initialState = {
    userReducer: {user: newUser},
    taskListReducer: {taskList: newTaskList},
    foodReducer: {foodList: newFoodList}};

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