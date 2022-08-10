import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Auth.css';

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(null);
    const [showPassword, setSowPassword] = useState(false);

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    return (
        <form className="form__auth" onSubmit={handleSubmit}>
            <i className="fa-solid fa-lock"></i>
            <legend className="form__auth--legend">Sign In</legend>

            <input id="email" name="email" className="email" type="text" placeholder="Email Address *" required />

            <label className="form__label--password" htmlFor="password">
                <input id="password" name="password" className="password" type={showPassword ? "text" : "password"} placeholder="Password *" required />
                <i className="fa-solid fa-eye" onClick={() => setSowPassword(state => !state)}></i>
            </label>

            <button className="form__button--signin" type="submit">SIGN IN</button>
            <button className="form__button--signin google">
                <i className="fa-brands fa-google"></i>
                &nbsp;
                GOOGLE SIGN IN
            </button>

            <p className="form__auth--question">
                DONT'T HAVE AN ACCOUNT? SIGH UP
            </p>
        </form>
    );
}

export default Auth;