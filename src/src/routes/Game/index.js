import React from "react"

const GamePage = ({handleGoHome}) => {
    const handleHome = () => {
        handleGoHome && handleGoHome('app')
    }
    return (
        <>
            <div>
                <p>This is Game Page!</p>

            </div>
            <button onClick={handleHome}>Go Home</button>
        </>
    )
}

export default GamePage
