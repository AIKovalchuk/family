import React from 'react'
import { useFormik } from 'formik'
import Input from '../../../base/fields/Input'
import Radio from '../../../base/fields/Radio'
import Button from '../../../base/Button'
import DatePicker from 'react-datepicker'

const Start = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            birthday: '',
            sex: null,
            socialStatus: null,
        },
        onSubmit: (values) => {
            let nextForms = []
            if (new Date().getFullYear() - new Date(values.birthday).getFullYear() > 23) {
                nextForms = [...nextForms, 'WAR']
            }
            if (new Date().getFullYear() - new Date(values.birthday).getFullYear() > 85) {
                nextForms = [...nextForms, 'WORLD_WAR']
            }
            switch (formik.values.socialStatus) {
                case 'Дошкольник':
                    break
                case 'Школьник':
                    nextForms = ['SCHOOL', 'FAMILY', ...nextForms]
                    break
                case 'Закончил школу':
                    nextForms = ['SCHOOL_END', 'FAMILY', ...nextForms]
                    break
                case 'Студент':
                    nextForms = ['UNIVERSITY', 'FAMILY', 'MARIED', 'WORKER', ...nextForms]
                    break
                case 'Безработный':
                    nextForms = ['UNIVERSITY', 'FAMILY', 'MARIED', 'WORKER', ...nextForms]
                    break
                case 'Работающий':
                    nextForms = ['MARIED', 'WORKER', ...nextForms]
                    break
                case 'Пенсионер':
                    nextForms = ['FAMILY', 'MARIED', ...nextForms]
                    break
                default:
                    break
            }

            onSubmit(values, nextForms)
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            {/* <label htmlFor="birthday">{'День рождения'}</label>
            <DatePicker
                id="birthday"
                selected={formik.values.birthday}
                onChange={(e) => {
                    formik.setValues({ ...formik.values, birthday: e })
                }}
            /> */}
            <Input
                id="birthday"
                label={'Укажите дату рождения'}
                type="date"
                value={formik.values.birthday}
                onChange={formik.handleChange}
            />
            <Radio
                id="sex"
                label="Пол"
                value={formik.values.sex}
                list={['Мужской', 'Женский']}
                onChange={formik.handleChange}
            />
            <Radio
                id="socialStatus"
                label="Род деятельности"
                value={formik.values.socialStatus}
                list={[
                    'Дошкольник',
                    'Школьник',
                    'Закончил школу',
                    'Студент',
                    'Безработный',
                    'Работающий',
                    'Пенсионер',
                ]}
                onChange={formik.handleChange}
            />
            <div className="controls">
                <Button small>Далее</Button>
            </div>
        </form>
    )
}

export default Start
