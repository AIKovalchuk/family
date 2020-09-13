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
            firstName: '',
            lastName: '',
            password: '',
            phone: '',
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
                id="firstName"
                placeholder="Иван"
                value={formik.values.firstName}
                onChange={formik.handleChange}
            />
            <Input
                id="lastName"
                placeholder="Иванов"
                value={formik.values.lastName}
                onChange={formik.handleChange}
            />
            <Input
                id="phone"
                placeholder="+7 999 999 99 99"
                value={formik.values.phone}
                onChange={formik.handleChange}
            />
            <Input
                id="password"
                type="password"
                placeholder="Пароль..."
                value={formik.values.password}
                onChange={formik.handleChange}
            />
            <Button>Зарегистрироваться</Button>
        </form>
    )
}

Form.propTypes = {}

export default Form
