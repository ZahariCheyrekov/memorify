import './Header.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Header = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [user?.token]);

    const logout = () => localStorage.clear();

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