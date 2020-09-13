import React from 'react'
import Router from '../../base/Router'

const Auth = () => {
    return (
        <div className="auth">
            <Router small href="/login">
                Войти
            </Router>
            <Router outline small href="/register">
                Регистрация
            </Router>
        </div>
    )
}

export default Auth
