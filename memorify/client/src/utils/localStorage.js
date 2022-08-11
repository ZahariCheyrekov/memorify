export const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const getUser = () => {
    const serializedUser = localStorage.getItem('user');

    if (serializedUser) {
        const user = JSON.parse(serializedUser);
        return user;
    }
}

export const removeUser = () => localStorage.removeItem('user');

export const getToken = () => getUser()?.token;