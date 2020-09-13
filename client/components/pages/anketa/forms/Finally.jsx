import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '../../../base/Button'

const Finally = ({ form }) => {
    const Fetch = async () => {
        try {
            console.log(form)
            const res = await FormService.sendForm(form)
        } catch (e) {}
    }

    useEffect(() => {
        Fetch()
    }, [])
    return (
        <div className="finally">
            <div>Вы заполнили анкету!</div>
            <Button onClick={Fetch}>Посмотреть льготы</Button>
        </div>
    )
}

Finally.propTypes = {}

export default Finally
