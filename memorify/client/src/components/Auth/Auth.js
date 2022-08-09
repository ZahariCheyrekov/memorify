import { useState } from 'react';
import './Auth.css';

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(null);

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
        <form className="form__auth" onSubmit={handleSubmit}>
            <input id="email" name="email" className="email" type="text" placeholder="example@gmail.com *" required />

            <input id="password" name="password" className="password" type="password" placeholder="Password *" required />
            <i className="fa-solid fa-eye"></i>
        </form>
    );
}

export default Auth;