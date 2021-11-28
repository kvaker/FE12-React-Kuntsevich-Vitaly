import {FOOD_ACTIONS} from '../actionTypes';

const foodReducer = (state, action) => {
    let newFoodList = [];
    switch (action.type) {
        case (FOOD_ACTIONS.addFood):
            newFoodList = action.payload.fetchData;
            return { ...state, foodList: newFoodList };

        default:
            return {...state}
    }
}

export default foodReducer;