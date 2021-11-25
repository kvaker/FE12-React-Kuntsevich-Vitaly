import { USER_ACTIONS } from '../actionTypes';


const userReducer = (state, action) => {
    let newUser = {};
    switch (action.type) {
        case (USER_ACTIONS.newUser):
            newUser =
                {
                    name: action.payload.name,
                    firstName: action.payload.firstName,
                    city: action.payload.city,
                    birthday: action.payload.birthday,
                    userID: action.payload.id,
                };
            return { ...state, user: newUser };

        case (USER_ACTIONS.logined):
            newUser =
                {
                    name: action.payload.name,
                    firstName: action.payload.firstName,
                    city: action.payload.city,
                    birthday: action.payload.birthday,
                    userID: action.payload.id,
                };
            return { ...state, user: newUser };

        case (USER_ACTIONS.logOut):
            newUser = {};
            return { ...state, user: newUser };

        default: return { ...state }
    }
}

export default userReducer;