import axios  from 'axios';

const instance = axios.create({
    baseURL: 'https://backend-tindr.herokuapp.com/'
})

export default instance;