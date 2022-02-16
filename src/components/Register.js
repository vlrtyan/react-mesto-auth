import EntryForm from './EntryForm';
import React from 'react';

function Register() {
    return (
        <EntryForm 
        title="Регистрация"
        buttonName="Зарегистрироваться"
        >
        <button className="entry__redirect-button" type="submit">Уже зарегистрированы? Войти</button>
        </EntryForm>
    )
}

export default Register