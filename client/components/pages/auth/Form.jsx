import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import Input from '../../base/fields/Input'
import Button from '../../base/Button'
import Router from '../../base/Router'
import AuthService from '../../../services/Auth'

const Form = (props) => {
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            AuthService.login(values)
                .then((e) => {
                    localStorage.set('token', e.jwtToken)
                    router.push('/')
                })
                .catch((e) => console.log(e))
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <Input
                id="email"
                placeholder="пример@email.ru"
                value={formik.values.email}
                onChange={formik.handleChange}
            />
            <Input
                id="password"
                type="password"
                placeholder="Пароль..."
                value={formik.values.password}
                onChange={formik.handleChange}
            />
            <div className="control">
                <Router outline href="/register">
                    Регистрация
                </Router>
                <Button>Войти</Button>
            </div>
        </form>
    )
}

Form.propTypes = {}

export default Form
