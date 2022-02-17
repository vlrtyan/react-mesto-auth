import React from 'react';

function Register() {
    return (
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
        <button className="register__redirect-button" type="submit">Уже зарегистрированы? Войти</button>
    </form>
        
    )
}

export default Register