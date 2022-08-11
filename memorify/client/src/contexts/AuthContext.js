import { createContext, useEffect, useState } from 'react';

import { getUser } from '../utils/localStorage';
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const user = getUser();
        setCurrentUser(user);
    }, []);

    return (
        <AuthContext.Provider
            value={currentUser}
        >
            {children}
        </AuthContext.Provider>
    );
}