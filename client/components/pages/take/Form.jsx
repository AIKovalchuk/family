import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import Input from '../../base/fields/Input'

const Form = ({}) => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            yearOld: 0,
            passport: '',
        },
        onSubmit: (values) => {},
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <Input value={formik.values.firstName} />
        </form>
    )
}

Form.propTypes = {}

export default Form
