import React from "react"
import s from '../Header/Header.module.css'

function Header({title, descr}) {
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>{title && title}</h1>
                <p>{descr && descr}</p>
            </div>
        </header>
    );
}

export default Header
