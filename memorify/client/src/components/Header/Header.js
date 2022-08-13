import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import decode from 'jwt-decode';
import Navbar from '../Navbar/Navbar';
import { removeUser } from '../../utils/localStorage';

import './Header.css';

export const Header = () => {
    const user = useContext(AuthContext);

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                removeUser();
            }
        }
    }, [user?.token]);

    return (
        <header className="header">
            <h2 className="header__title">
                <Link to={'/'}>Memorify</Link>
            </h2>
            <Navbar />
        </header>
    );
}

export default Header;