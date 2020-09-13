import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from '../../../base/Button'
import FormService from '../../../../services/Form'

const Finally = ({ form }) => {
    const [loading, setLoading] = useState(false)
    const [benifits, setBenifits] = useState(null)
    const [current, setCorrent] = useState(0)
    const onClickBenifit = (id) => {
        setCorrent(id)
    }
    const Fetch = async () => {
        try {
            console.log(form)
            setLoading(true)
            const res = await FormService.sendForm(form)
            setBenifits(res)
            setLoading(false)
        } catch (e) {
            setLoading(true)
        }
    }

    useEffect(() => {
        Fetch()
    }, [])

    return (
        <div className="finally">
            <div>Вы заполнили анкету!</div>
            {loading && !benifits && 'Ищем льготы...'}
            <div className="list">
                {benifits &&
                    benifits.map((val, idx) => {
                        return (
                            <Benifit
                                title={val.title}
                                current={idx === current}
                                onClick={() => onClickBenifit(idx)}
                            />
                        )
                    })}
            </div>
            {/* <Button onClick={Fetch}>Посмотреть льготы</Button> */}
            {benifits && (
                <div className="block">
                    <div className="desc">{'Описание ' + benifits[current].description}</div>
                    <div className="date">{'Дата принятия ' + benifits[current].createdAt}</div>
                </div>
            )}
        </div>
    )
}

const Benifit = ({ title, current, onClick }) => {
    return (
        <div className={classNames('benefit', { current: current })} onClick={onClick}>
            {title}
        </div>
    )
}

Finally.propTypes = {}

export default Finally
