import React from 'react';
import DropDownList from './DropDownList';
import CONSTANTS from "../../constants";

const NavLinks = ({ navigation }) => {

    const navList = Object.keys(navigation)


    return (
        <ul>
            {navList.map((elem, index) => (
                <li key={index}>
                    <span>{elem}</span>
                    <img
                        src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                        alt="menu"
                    />

                    <DropDownList navigation={navigation[elem]} />
                </li>
            ))}
        </ul>
    );
}

export default NavLinks;
