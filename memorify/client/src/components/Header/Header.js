import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import './Header.css';
import decode from 'jwt-decode';
import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    const user = useContext(AuthContext);

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
    }, [user?.token]);

    const logout = () => {
        localStorage.clear();
    }

    return (
        <header className="header">
            <h2 className="header__title">
                <Link to={'/'}>Memorify</Link>
            </h2>

            <nav className="header__nav">
                <ul className="header__ul">
                    <Link to={'/memories'}>Memories</Link>
                    {user
                        ?
                        <>
                            <Link to={'/create'}>Create</Link>
                            <Link onClick={logout} to={'/'}>Logout</Link>
                        </>
                        : <Link to={'/auth'}>Sign In</Link>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;