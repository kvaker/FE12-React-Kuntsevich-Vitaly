import axios from "axios";


const remooteDietInstance = axios.create({
    method: 'GET',
    url: 'https://edamam-recipe-search.p.rapidapi.com/search',
    headers: {
        'x-rapidapi-host': 'edamam-recipe-search.p.rapidapi.com',
        'x-rapidapi-key': '976e8b03fdmshb235b038b5da19ap18d4afjsnb4489a711590'
    }
});
console.log('remooteDietInstance', remooteDietInstance)


export const getFoodByName = (searchQuery) => {
    return new Promise((res, rej) => {
        remooteDietInstance.get(`https://edamam-recipe-search.p.rapidapi.com/search`, {params:
                {hits: searchQuery}})
            .then((response) => {
                const data = response.data.docs;
                if (!data) rej()
                res(data)
            })
    })
};