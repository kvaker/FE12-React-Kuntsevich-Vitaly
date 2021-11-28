import { FOOD_ACTIONS } from '../actionTypes'
export const newFoodAdd = (fetchData) => {
    return ( {
        type: FOOD_ACTIONS.addFood,
        payload: {
            fetchData
        }
    })
};