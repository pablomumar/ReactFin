import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://renacimiento-7b1db.firebaseio.com/cliente'
});

export default instance;