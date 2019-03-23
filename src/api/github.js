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
    .catch((error) => console.log(baseUri + '/users/' + username + '/repos?client_id=' + clientId + '&client_secret=' + clientSecret))  
}