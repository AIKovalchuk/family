import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Benifits = ({ benifits }) => {
    return (
        <div className="benifits">
            <div className="title">{'Список всех действующих льгот'}</div>
            <div className="list">
                {benifits &&
                    benifits.map(({ title, href }) => (
                        <Item key={href} title={title} href={href} />
                    ))}
            </div>
        </div>
    )
}

const Item = ({ title, href }) => {
    return (
        <Link href={'/benifits/[id]'} as={'/benifits/' + href}>
            <a className="item">{title}</a>
        </Link>
    )
}

Benifits.propTypes = {}

export default Benifits
