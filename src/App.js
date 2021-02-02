import React from "react"
import {useState} from 'react'
import HomePage from "./src/routes/Home";
import GamePage from "./src/routes/Game";

const App = () => {
    const handleChangePage = (page) => {
        console.log('App')
        setPage(page)
    }
    const handleGoHome = (page) => {
        setPage(page)
    }
    
    const [page, setPage] = useState('app')

    switch (page) {
        case "app":
            return <HomePage handleChangePage={handleChangePage}/>
        case 'game':
            return <GamePage handleGoHome={handleGoHome}/>
        default:
            return <HomePage />
    }

}

export default App
