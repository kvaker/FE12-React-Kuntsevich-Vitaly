import axios from "axios";


// const remooteDietInstance = axios.create({
//     baseURL: 'https://wger.de/api/v2/',
// });
// console.log('remooteDietInstance', remooteDietInstance)
// remooteDietInstance.put('api/user/register', {Birthday, City, FirstName, password, email, userID })
//     .then(({data}) => {
//         const userData = {
//             permissions:["summaryPage"],
//         }
//     })
//
// remooteDietInstance.interceptors.request.use(
//     (config) => {
//         const accessToken = localStorage.getItem("accessToken");
//         if (accessToken) {
//             config.headers["x-auth-token"] = accessToken;
//         }
//         return config;
//     },
//     (error) => {
//         Promise.reject(error);
//     }
// );
//
// remooteDietInstance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     function (error) {
//         const originalRequest = error.config;
//         console.log('axios error', error, originalRequest)
//
//         let refreshToken = localStorage.getItem("refreshToken");
//         refreshToken && error.response.status === 401 && !originalRequest._retry
//         {
//             originalRequest._retry = true;
//             return axios
//                 .post(`${baseUrl}/auth/refresh_token`, { refreshToken: refreshToken })
//                 .then((res) => {
//                         if (res.status === 200) {
//                             localStorage.setItem("accessToken", res.data.accessToken);
//                             localStorage.setItem("refreshToken", res.data.refreshToken)
//                         }
//                     }
//                 )
//             export default remooteDietInstance

export const getFoodByName = (name, calory) => {
    return remooteDietInstance.post(`search json`,
        {name: "sdf", dta: "asdf"},
        {params: {name, calory}})
};