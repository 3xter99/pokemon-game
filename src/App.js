import React from "react"
import s from './index.module.css';
import {useRouteMatch, Route, Switch} from 'react-router-dom'
import HomePage from "./src/routes/Home";
import GamePage from "./src/routes/Game";
import MenuHeader from "./src/components/MenuHeader/MenuHeader";
import About from "./src/routes/About/About";
import Contact from "./src/routes/Contact/Contact";
import NotFound from "./src/routes/NotFound/NotFound";
import Footer from "./src/components/Footer/Footer";

const App = () => {
    const match = useRouteMatch('/')
    console.log(match)


    return (
        <Switch>
            <Route>
                <div className={s.container}>
                    <div>
                        <MenuHeader bgActive={!match.isExact}/>
                        <Switch>
                            <Route path={'/'} exact component={HomePage}/>
                            <Route path={'/game'} component={GamePage}/>
                            <Route path={'/about'} component={About}/>
                            <Route path={'/contact'} component={Contact}/>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Route>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default App
