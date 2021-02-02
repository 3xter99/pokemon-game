import React, {useState} from "react"


import Menu from "./Menu/Menu";
import Navbar from "./Navbar/Navbar";

const MenuNavbar = () => {
    const [isActive, setActive] = useState(true)

    const handleChange = () => {
        setActive(!isActive)
    }


    return (
        <>
        <Menu isActive={isActive}/>
        <Navbar isActive={isActive} handleChange={handleChange}/>
        </>
    )
} 

export default MenuNavbar;
