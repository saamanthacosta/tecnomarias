import axios from 'axios';

var API = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

class Request {

    async get(url) {
        try {
            return await API.get(url);
        } catch (erro) {
            return Promise.reject(erro.response)
        }

    };

    async post(url, obj) {
        try {
            return await API.post(url, obj);
        } catch (erro) {
            return Promise.reject(erro.response)
        }
    };

    async delete(url, id) {
        try {
            return await API.delete(url);
        } catch (erro) {
            return Promise.reject(erro.response)
        }
    };

    async put(url, obj) {
        try {
            return await API.put(url, obj);
        } catch (erro) {
            return Promise.reject(erro.response)
        }
    };
}

export default new Request();