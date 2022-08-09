import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">
                <Link to={'/'}>Memorify</Link>
            </h1>

            <nav className="header__nav">
                <ul className="header__ul">
                    <Link to={'/cards'}>Cards</Link>
                    <Link to={'/create'}>Create</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/register'}>Register</Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;