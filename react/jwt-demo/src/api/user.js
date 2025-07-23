import axios from './config';

export const getUser = () => {
    return axios.get('/user'); 
}

export const doLogin = (data) => {
    return axios.post('/login',data);
}
// export const getUserArticle = () => {
//     return axios.get('/user/article');
// }