import React, { useState } from 'react';

function Login({ handleLogin }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.email || !formData.password) {
            return;
        }
        handleLogin(formData);
        setFormData({ email: '', password: '' });
    }

    return (
        <form onSubmit={handleSubmit} className="login__form" name="login" onSubmit="">
            <h1 className="login__title">Вход</h1>
            <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="login__input"
                name="email"
                id="email"
                required />
            <input
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="Пароль"
                className="login__input"
                name="password"
                id="password"
                required />
            <button onSubmit={handleSubmit} className="login__submit-button" type="submit">Войти</button>
        </form>
    )
}

export default Login