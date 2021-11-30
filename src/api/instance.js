import axios from "axios";


const remooteDietInstance = axios.create({
    method: 'GET',
    url: 'https://edamam-recipe-search.p.rapidapi.com/search',
    params: {q: ''},
    headers: {
        'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
        'x-rapidapi-key': '976e8b03fdmshb235b038b5da19ap18d4afjsnb4489a711590'
    }
});

export const registerUser = (Name, password, Birthday, City, email, userID) => {
    return new Promise((res, rej) =>{
        let usersList = JSON.parse(window.localStorage.getItem('registeredUsersList'));
        if (!usersList) {
            usersList = [];
        }
        const userId = Math.floor((Math.random() * 1000) + 1);
        const loginned = true;
        usersList.push({Name, password, Birthday, City, email, userID, loginned});
        console.log(usersList);
        window.localStorage.setItem('registeredUsersList', JSON.stringify(usersList));
        res({dataId: userId,  dataLogged: loginned});
    })
};

export const APIGetTableData = (dietLabels, calories, totalNutrients,
filter, sort, itemsPerPage) => {
    remooteDietInstance.get("/", {params: {dietLabels, calories, totalNutrients, filter, itemsPerPage,
            sortDirection: sort.sortDirection, sortColumn: sort.sortColumn}});
};
