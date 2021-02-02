import React from "react"
import s from './Layout.module.css'
import cn from 'classnames'

function Layout({id, title, descr, urlBG, colorBg, children}) {
    const styleRoot = {
        backgroundImage: urlBG ?`url(${urlBG})` : null,
        backgroundColor: colorBg ? colorBg : null
    }
    return (
        <section
            className={s.root}
            id={id}
            style={styleRoot}
        >
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>

                    </div>
                    <div className={cn(s.desc, s.full)}>
                    </div>
                    {children}
                </article>
            </div>
        </section>
    );
}
export default Layout;
