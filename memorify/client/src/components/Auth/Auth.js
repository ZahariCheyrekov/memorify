import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Auth.css';
import { signin, signup } from '../../services/user';

const Auth = () => {
    const navigate = useNavigate();
    const [isSignIn, setIsSignIn] = useState(true);
    const [showPassword, setSowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (isSignIn) {
            console.log(formData)
            signin(formData, navigate);
        } else {
            console.log(formData)
            signup(formData, navigate);
        }

    }

    const handleChange = (ev) => {
        setFormData({ ...formData, [ev.target.name]: ev.target.value })
    }

    const switchMode = () => {
        setIsSignIn((prevState) => !prevState);
    }

    return (
        <form className="form__auth" onSubmit={handleSubmit}>
            <i className="fa-solid fa-lock"></i>
            <legend className="form__auth--legend">
                {isSignIn ? "Sign In" : "Sign Up"}
            </legend>

            {!isSignIn && (
                <>
                    <input id="firstName" name="firstName" className="firstName" type="text" placeholder="First Name *" required onChange={handleChange} />
                    <input id="lastName" name="lastName" className="lastName" type="text" placeholder="Last Name *" required onChange={handleChange} />
                </>
            )}

            <input id="email" name="email" className="email" type="text" placeholder="Email Address *" required onChange={handleChange} />

            <label className="form__label--password" htmlFor="password">
                <input id="password" name="password" className="password" type={showPassword ? "text" : "password"} placeholder="Password *" required onChange={handleChange} />
                <i className="fa-solid fa-eye" onClick={() => setSowPassword((state) => !state)}></i>
            </label>

            {!isSignIn && (
                <label className="form__label--password" htmlFor="repeatPassword">
                    <input id="repeatPassword" name="repeatPassword" className="repeatPassword" type={showPassword ? "text" : "password"} placeholder="Repeat Password *" required onChange={handleChange} />
                    <i className="fa-solid fa-eye" onClick={() => setSowPassword((state) => !state)}></i>
                </label>
            )}

            <button className="form__button--signin" type="submit">
                {isSignIn ? "SIGN IN" : "SIGN UP"}
            </button>

            <button className="form__auth--action--button" onClick={switchMode}>
                {isSignIn
                    ? "DONT'T HAVE AN ACCOUNT? SIGN UP"
                    : "ALREADY HAVE AN ACCOUNT? SIGN IN"
                }
            </button>
        </form >
    );
}

export default Auth;