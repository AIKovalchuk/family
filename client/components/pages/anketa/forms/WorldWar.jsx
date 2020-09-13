import React from 'react'
import { useFormik } from 'formik'
import Input from '../../../base/fields/Input'
import Radio from '../../../base/fields/Radio'
import Button from '../../../base/Button'
import DatePicker from 'react-datepicker'

const WorldWar = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            isWW: 'Нет',
        },
        onSubmit: (values) => {
            let nextForms = []

            onSubmit(values, nextForms)
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <Radio
                id="isWW"
                label="Вы участвовали в Великой Отечественной войне?"
                value={formik.values.sex}
                list={['Да', 'Нет']}
                onChange={formik.handleChange}
            />
            <div className="controls">
                <Button small>Далее</Button>
            </div>
        </form>
    )
}

export default WorldWar
