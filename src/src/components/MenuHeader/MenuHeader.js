import React, {useState} from "react"
import Menu from "./MenuNavbar/Menu/Menu";
import Navbar from "./MenuNavbar/Navbar/Navbar";




const MenuHeader = ({bgActive}) => {
    const [isActive, setActive] = useState(null)

    const handleChange = () => {
        setActive(prevState => !prevState)
    }


    return (
        <div>
            <Menu isActive={isActive} handleChange={handleChange}/>
            <Navbar isActive={isActive} bgActive={bgActive} handleChange={handleChange}/>
        </div>
    )
}

export default MenuHeader;
