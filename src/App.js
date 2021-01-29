import React from "react"

import './App.css';
import Header from "./src/components/Header/Header";
import Layout from "./src/components/Layout/Layout";
import Footer from "./src/components/Footer/Footer";
import bg1 from './src/assets/bg1.jpg'
import bg2 from './src/assets/bg2.jpg'

function App() {
    return (
        <>
            <Header
                title={'This is title'}
                descr={'This is Description!'}
            />
            <Layout
                id={'1'}
                title={'First layout title'}
                descr={'This is Description'}
                urlBG={bg1}
                colorBg=""
            />
            <Layout
                id={'2'}
                title={'Second layout title'}
                descr={'This is Description'}
                urlBG=""
                colorBg={'#ccc'}
            />
            <Layout
                id={'3'}
                title={'Third layout title'}
                descr={'This is Description'}
                urlBG={bg2}
                colorBg=""
            />
            <Footer/>
        </>

    );
}

export default App;
