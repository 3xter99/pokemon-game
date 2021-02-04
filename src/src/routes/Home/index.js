import React from "react"

import Header from "./../../components/Header/Header";
import Layout from "./../../components/Layout/Layout";
import Footer from "./../../components/Footer/Footer";
import bg1 from './../../assets/bg1.jpg'
import bg2 from './../../assets/bg2.jpg'


function HomePage({handleChangePage}) {
const handleClickButton = (page) => {
    handleChangePage && handleChangePage(page)
}


    return (
        <>
            <Header
                title={'This is title'}
                descr={'This is Description!'}
                onClickButton={handleClickButton}
            />
            <Layout
                id={'1'}
                title={'First layout title'}
                descr={'This is Description'}
                urlBG={bg1}
            >
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red"
                    on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them
                    into the player's own color of red or blue.</p>
            </Layout>
            <Layout
                id={'2'}
                title={'Second layout title'}
                descr={'This is Description'}
                colorBg={'#ccc'}
            >
            </Layout>

            <Layout
                id={'3'}
                title={'Third layout title'}
                descr={'This is Description'}
                urlBG={bg2}
            >
                <p>
                    To win, a majority of the total ten cards played (including the one card that is not placed on the
                    board) must be of the player's card color. To do this, the player must capture cards by placing a
                    card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch
                    will be compared. If the rank of the opponent's card is higher than the player's card, the player's
                    card will be captured and turned into the opponent's color. If the player's rank is higher, the
                    opponent's card will be captured and changed into the player's color instead.
                </p>
            </Layout>
            <Footer/>
        </>

    );
}

export default HomePage;


