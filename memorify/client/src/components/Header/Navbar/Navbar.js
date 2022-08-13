import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';
import { removeUser } from '../../../utils/localStorage';

const Navbar = () => {
    const user = useContext(AuthContext);

    return (
        <nav className="header__nav">
            <ul className="header__ul">
                <Link to={'/memories'}>Memories</Link>
                {user
                    ?
                    <>
                        <Link to={'/create'}>Create</Link>
                        <Link onClick={() => removeUser()} to={'/'}>Logout</Link>
                    </>
                    : <Link to={'/auth'}>Sign In</Link>
                }
            </ul>
        </nav>
    );
}

export default Navbar;