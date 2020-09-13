import React, { useState, useEffect } from 'react'
import Family from './forms/Family'
import Finally from './forms/Finally'
import Maried from './forms/Maried'
import Start from './forms/Start'
import University from './forms/University'
import War from './forms/War'
import Work from './forms/Work'
import WorldWar from './forms/WorldWar'

const Anketa = () => {
    const [type, setType] = useState('START')
    const [anketa, setAnketa] = useState({})
    const [queue, setQueue] = useState([])
    const [count, setCount] = useState(0)

    const onNext = (values, nextForm) => {
        console.log(values, nextForm)

        setCount(count + 1)
        setAnketa({ ...anketa, ...values })
        if (nextForm.length) {
            setType(nextForm[0])
            setQueue([...nextForm.slice(1), ...queue])
        } else {
            setType(queue[0])
            setQueue([...queue.slice(1)])
        }
    }

    const [form, setForm] = useState(<Start onSubmit={onNext} />)

    useEffect(() => {
        switch (type) {
            case 'START':
                setForm(<Start onSubmit={onNext} />)
                break
            case 'FAMILY':
                setForm(<Family onSubmit={onNext} />)
                break
            case 'MARIED':
                setForm(<Maried onSubmit={onNext} />)
                break
            case 'WORKER':
                setForm(<Work onSubmit={onNext} />)
                break
            case 'UNIVERSITY':
                setForm(<University onSubmit={onNext} />)
                break
            case 'WAR':
                setForm(<War onSubmit={onNext} />)
                break
            case 'WORLD_WAR':
                setForm(<WorldWar onSubmit={onNext} />)
                break
            case 'FINAL':
                setForm(<Finally form={anketa} />)
                break
            default:
                setForm(<Finally form={anketa} />)
                break
        }
        console.log(type, queue)
    }, [type, queue])

    return (
        <div className="anketa">
            <div className="anketa__header">
                <div className="indicate">
                    {[...new Array(count + queue.length)].map((val, ind) => {
                        console.log(count, queue.length)
                        if (ind < count) {
                            return <div className="complete"></div>
                        }
                        return <div className="none-complete"></div>
                    })}
                </div>
                <h2>Заполните все поля, чтобы мы могли подобрать для Вас льготы</h2>
            </div>
            <div className="anketa__wrapper">{form}</div>
        </div>
    )
}

export default Anketa
