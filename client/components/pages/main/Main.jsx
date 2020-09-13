import React from 'react'
import Router from '../../base/Router'
import Button from '../../base/Button'
import Link from 'next/link'

const Main = () => {
    const title = 'Узнай свои льготы прямо сейчас!'
    const description = `    Добро пожаловать на сервис, где вы можете  узнать все полагающиеся для Вас льготы. Вы можите заполнить анкету, чтобы Вам  максимально точно подобрали льготы. Или же сами посмотрите активные льготы, распределенные по категориям.`
    const benifits = [
        {
            path: 'http://guides.gosuslugi.ru/download.html?file=/765/22.svg&dl=0',
            name: 'Tooltip',
            fill: '#5CC4CA',
            href: '/',
        },
        {
            path: 'http://guides.gosuslugi.ru/download.html?file=/765/23.svg&dl=0',
            name: 'Tooltip',
            fill: '#5CC4CA',
            href: '/',
        },
        {
            path: 'http://guides.gosuslugi.ru/download.html?file=/765/16.svg&dl=0',
            name: 'Tooltip',
            fill: '#5CC4CA',
            href: '/',
        },
        {
            path: 'http://guides.gosuslugi.ru/download.html?file=/765/17.svg&dl=0',
            name: 'Tooltip',
            fill: '#5CC4CA',
            href: '/',
        },
        {
            path: 'http://guides.gosuslugi.ru/download.html?file=/765/22.svg&dl=0',
            name: 'Tooltip',
            fill: '#5CC4CA',
            href: '/',
        },
        {
            path: 'http://guides.gosuslugi.ru/download.html?file=/765/18.svg&dl=0',
            name: 'Tooltip',
            fill: '#5CC4CA',
            href: '/',
        },
        {
            path: 'http://guides.gosuslugi.ru/download.html?file=/765/9.svg&dl=0',
            name: 'Tooltip',
            fill: '#5CC4CA',
            href: '/',
        },
        {
            path: 'http://guides.gosuslugi.ru/download.html?file=/765/29.svg&dl=0',
            name: 'Tooltip',
            fill: '#5CC4CA',
            href: '/',
        },
    ]
    return (
        <div className="main">
            <h1>{title}</h1>
            <div className="content">
                <div className="description">
                    <span>{description}</span>
                </div>
                <div className="control">
                    <Router large href="anketa">
                        Заполнить анкету
                    </Router>
                    <Router large outline href="benifits">
                        Посмотреть все льготы
                    </Router>
                </div>
            </div>
            <div className="sub-title">Льготы: </div>
            <div className="benifits">
                {benifits.map((item) => {
                    return <Item {...item} />
                })}
            </div>
            <div className="categories">{}</div>
        </div>
    )
}

const Item = ({ path, fill, name, href }) => {
    return (
        <Link href={href}>
            <div className="item">
                <img src={path} alt={name} width="160" height="160" />
            </div>
        </Link>
    )
}

export default Main
