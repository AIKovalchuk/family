import React from 'react'
import PropTypes from 'prop-types'
import Form from './Form'

const AuthPage = (props) => {
    return (
        <div className="login">
            <div className="title">Авторизуйтесь</div>
            <Form />
        </div>
    )
}

AuthPage.propTypes = {}

export default AuthPage
