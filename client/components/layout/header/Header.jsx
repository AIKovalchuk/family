import React from 'react'
import Button from '../../base/Button'
import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Menu />
            <div className="block"></div>
        </div>
    )
}

export default Header
