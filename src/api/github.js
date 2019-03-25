import { baseUri, clientId, clientSecret } from './constants';
import axios from 'axios';

export const getUser = (username) => {
    return axios.get(baseUri + '/users/' + username + '?client_id=' + clientId + '&client_secret=' + clientSecret)
    .then((response) => {
        return response.data;
    })
    .catch((error) => console.log(error))
}


export const getUserRepos = (username) => {
    return axios.get(baseUri + '/users/' + username + '/repos?client_id=' + clientId + '&client_secret=' + clientSecret)
    .then((response) => {
        return response.data;
    })
    .catch((error) => console.log(error))  
}

export const getPopularRepos = (language) => {
    return axios.get(baseUri + '/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories?client_id=' + clientId + '&client_secret=' + clientSecret)
    .then((response) => {
        return response.data;
    })
    .catch((error) => console.log(error))  
}