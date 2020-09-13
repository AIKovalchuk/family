import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from './Form'
import Code from './Code'

const SigupPage = (props) => {
    const [isCode, setIsCode] = useState(false)
    return (
        <div className="sigup">
            <div className="title">{!isCode ? 'Введите Ваши данные' : 'Введите код'}</div>
            <div>{!isCode ? <Form setIsCode={setIsCode} /> : <Code />}</div>
        </div>
    )
}

SigupPage.propTypes = {}

export default SigupPage
