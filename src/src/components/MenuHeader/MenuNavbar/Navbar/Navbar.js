import React from "react"
import s from './Navbar.module.css'
import cn from 'classnames'

const Navbar = ({isActive, bgActive = true, handleChange}) => {
    const handleClick = () => {
        handleChange()
    }

    return (
        <nav id={s.navbar} className={cn({
            [s.bgActive]: bgActive
        })}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div onClick={handleClick} className={cn(s.menuButton, {[s.active] : isActive})}>
                    <span/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
