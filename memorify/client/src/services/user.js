import * as api from '../api/requester.js';

export const signup = async (formData, navigate) => {
    try {
        const { data } = await api.signup(formData);
        return data;
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const signin = async (formData, navigate) => {
    try {
        const { data } = await api.signin(formData);
        return data;
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}