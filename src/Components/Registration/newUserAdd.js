import { USER_ACTIONS } from "/src/Store/selectors/actionType";

export const newUserAdd = (Name, password, Birthday, City, email, userID) => {
    return (
        {
            type: USER_ACTIONS.newUser,
            payload: {
                name: Name,
                password: password,
                Birthday: Birthday,
                City: City,
                email: email,
                id: userID
            }
        })
};