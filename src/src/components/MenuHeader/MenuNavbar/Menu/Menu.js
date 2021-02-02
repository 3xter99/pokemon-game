import React from "react"
import s from './Menu.module.css';
import cn from 'classnames'

const Menu = ({isActive}) => {
    console.log(s)

    return (
        <div className={cn(s.menuContainer, {[s.active] : isActive})}>
            <div className={s.overlay}></div>
            <div className={s.menuContainer}>
                <ul>
                    <li>
                        <a href="#welcome">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game">
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Menu
