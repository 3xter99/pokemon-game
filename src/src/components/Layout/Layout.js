import React from "react"
import s from './Layout.module.css'

function Layout({id, title, descr, urlBG, colorBg}) {
    const styleRoot = {}
    styleRoot.backgroundImage = urlBG ?`url(${urlBG})` : null
    styleRoot.backgroundColor = colorBg ? colorBg : null
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
                    <div className={`${s.desc} ${s.full}`}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}
export default Layout;
