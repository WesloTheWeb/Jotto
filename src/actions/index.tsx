import axios from 'axios';

export const getSecretWord = () => {
    // return response from server. This is placeholder
    return axios.get('http://localhost:3030')
        .then(response => response.data);
}