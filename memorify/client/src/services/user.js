import * as api from '../api/requester.js';
import { saveUser } from '../utils/localStorage.js';

export const signup = async (formData) => {
    try {
        const { data } = await api.signup(formData);
        saveUser(data);

        return data;
    } catch (error) {
        console.log(error);
    }
}

export const signin = async (formData) => {
    try {
        const { data } = await api.signin(formData);
        saveUser(data);

        return data;
    } catch (error) {
        console.log(error);
    }
}