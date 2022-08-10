import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <h2 className="header__title">
                <Link to={'/'}>Memorify</Link>
            </h2>

            <nav className="header__nav">
                <ul className="header__ul">
                    <Link to={'/memories'}>Memories</Link>
                    <Link to={'/create'}>Create</Link>
                    <Link to={'/login'}>Sign In</Link>
                    <Link to={'/register'}>Sign Up</Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;