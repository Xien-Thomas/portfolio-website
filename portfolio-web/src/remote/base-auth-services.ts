import axios from 'axios';

export const appPDF = axios.create({
    baseURL: '',
    headers:{
        'Content-Type': "application/json",
    }
})