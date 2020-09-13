import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import Input from '../../base/fields/Input'
import Button from '../../base/Button'
import Router from '../../base/Router'

const Form = (props) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {},
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
            <Router outline href="/register">
                Регистрация
            </Router>
            <Button>Войти</Button>
        </form>
    )
}

Form.propTypes = {}

export default Form
