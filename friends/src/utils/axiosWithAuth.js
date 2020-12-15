import axios from 'axios';

export const axiosWithAuth = () => {
    //get token
    const token = window.localStorage.getItem('token');

    //new instance
    return axios.create({
        headers: {
            authorization: token
        },

        baseURL:'http://localhost:5000'
    })
};