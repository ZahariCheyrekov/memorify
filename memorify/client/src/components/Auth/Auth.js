import { useState } from 'react';
import './Auth.css';

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(null);
    const [showPassword, setSowPassword] = useState(false);

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
        <form className="form__auth" onSubmit={handleSubmit}>
            <legend>Login</legend>

            <input id="email" name="email" className="email" type="text" placeholder="Email Address *" required />

            <label className="form__label--password" htmlFor="password">
                <input id="password" name="password" className="password" type={showPassword ? "text" : "password"} placeholder="Password *" required />
                <i className="fa-solid fa-eye" onClick={() => setSowPassword(state => !state)}></i>
            </label>

            <button className="form__button--submit" type="submit">Login</button>
        </form>
    );
}

export default Auth;