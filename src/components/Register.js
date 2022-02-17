import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="register">
            <form className="register__form" name="login" onSubmit="">
                <h1 className="register__title">Регистрация</h1>
                <input
                    type="email"
                    placeholder="Email"
                    className="register__input"
                    name="email"
                    id="email"
                    required />
                <input
                    type="password"
                    placeholder="Пароль"
                    className="register__input"
                    name="password"
                    id="password"
                    required />
                <button className="register__submit-button" type="submit">Зарегистрироваться</button>
                <div className="redirect">
                    <p className="redirect__text">Уже зарегистрированы? </p>
                    <Link to="/signin" className="redirect__link">Войти</Link>
                </div>
            </form>
        </div>
    )
}

export default Register