import { USER } from '../constants/user';

export const saveUser = (user) => {
    localStorage.setItem(USER, JSON.stringify(user));
}

export const getUser = () => {
    const serializedUser = localStorage.getItem(USER);

    if (serializedUser) {
        const user = JSON.parse(serializedUser);
        return user;
    }
}

export const removeUser = () => localStorage.clear();

export const getToken = () => getUser()?.token;