import * as api from '../api/requester';

import { saveUser } from '../utils/localStorage';
import { SIGNIN, SIGNUP } from '../constants/action';

export const auth = async (action, data) => {
    try {
        let result;

        if (action === SIGNIN) {
            result = await api.signin(data);
        } else if (action === SIGNUP) {
            result = await api.signup(data);
        }

        const user = result.data;
        saveUser(user);
    } catch (error) {
        console.log(error);
    }
}