export const registerUser = (Name, password, Birthday, City, email, userID) => {
    return new Promise((res, rej) =>{
        let usersList = JSON.parse(window.localStorage.getItem('registeredUsersList'));
        if (!usersList) {
            usersList = [];
        }
        usersList.push({Name, password, Birthday, City, email, userID});
        console.log(usersList);
        window.localStorage.setItem('registeredUsersList', JSON.stringify(usersList));
        res({data: usersList});
    })
};