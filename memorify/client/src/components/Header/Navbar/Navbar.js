import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';
import { removeUser } from '../../../utils/localStorage';

import './Navbar.css';

const Navbar = () => {
    const user = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <nav className="header__nav">
            <ul className={`header__ul ${isOpen && "open"}`}>
                <Link
                    to={'/'}
                    onClick={handleClick}
                >
                    Home
                </Link>
                <Link
                    to={'/memories'}
                    onClick={handleClick}
                >
                    Memories
                </Link>

                {user
                    ?
                    <>
                        <Link
                            to={'/create'}
                            onClick={handleClick}
                        >
                            Create
                        </Link>
                        <Link onClick={() => {
                            setIsOpen((prevState) => !prevState);
                            removeUser();
                        }}
                            to={'/'}>
                            Logout
                        </Link>
                    </>
                    : <Link
                        to={'/auth'}
                        onClick={handleClick}
                    >
                        Sign In
                    </Link>
                }
            </ul>
            <div
                className={`nav__toggle ${isOpen && "open"}`}
                onClick={handleClick}
            >
                <div className="bar">
                </div>
            </div>
        </nav >
    );
}

export default Navbar;