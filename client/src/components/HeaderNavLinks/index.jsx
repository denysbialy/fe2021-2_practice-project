import React from 'react';
import DropDownList from './DropDownList';
import CONSTANTS from "../../constants";
import { Link } from 'react-router-dom';

const NavLinks = ({ navigation }) => {

    const navList = Object.keys(navigation)


    return (
        <ul>
            {navList.map((elem, index) => {
                if (index !== navList.length - 1) {
                    return (
                        <li key={index}>
                            <span>{elem}</span>
                            <img
                                src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                                alt="menu"
                            />

                            <DropDownList navigation={navigation[elem]} />
                        </li>
                    )
                } else {
                    return (
                        <Link to="/squadhelp-pricing" style={{ textDecoration: "none", color: "#495d8b" }}>
                            {elem}
                        </Link>
                    )
                }
            })}
        </ul>
    );
}

export default NavLinks;
