import * as api from '../api/requester.js';
import { saveUser } from '../utils/localStorage.js';

export const auth = async (action, data) => {
    try {
        let result;

        if (action === 'signin') {
            result = await api.signin(data);
        } else if (action === 'signup') {
            result = await api.signup(data);
        }

        const user = result.data;
        saveUser(user);
    } catch (error) {
        console.log(error);
    }
}