import React from "react"
import s from './Menu.module.css';
import cn from 'classnames'
import {Link} from "react-router-dom";

const MENU = [
    {
        href : '/welcome',
        title : 'HOME'
    },
    {
        href : '/game',
        title : 'GAME'
    },
    {
        href : '/about',
        title : 'ABOUT'
    },
    {
        href : '/contact',
        title : 'CONTACT'
    }
    ]

const Menu = ({isActive, handleChange}) => {

    return (
        <div className={cn(s.menuContainer, {
            [s.active] : isActive === true,
            [s.deactive] : isActive === false
        })}>
            <div className={s.overlay}/>
            <div>
                <ul>
                    {
                        MENU.map(({href, title}, index) => (
                            <li key={href} onClick={()=> {handleChange()}}>
                                <Link to={href}>
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default Menu
