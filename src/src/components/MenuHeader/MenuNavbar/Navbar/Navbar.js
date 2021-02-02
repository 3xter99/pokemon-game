import React from "react"
import s from './Navbar.module.css'
import cn from 'classnames'

const Navbar = ({isActive, handleChange}) => {
    const handleClick = () => {
        handleChange()
    }

    return (
        <nav id={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a onClick={handleClick} className={cn(s.menuButton, {[s.active] : isActive})}>
                    <span></span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
