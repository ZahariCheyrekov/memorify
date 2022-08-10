import * as api from '../api/requester';

export const signup = (formData, navigate) => {
    try {

        navigate('/');
    } catch (error) {
        console.log(error);
    }
}

export const signin = (formData, navigate) => {
    try {

        navigate('/');
    } catch (error) {
        console.log(error);
    }
}