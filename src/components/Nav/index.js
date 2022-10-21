/* eslint-disable react/jsx-no-undef */
import { faBars, faFilm, faHeart, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import NavItem from './NavItem';

const items = [
    {
        label: 'Home',
        icon: <FontAwesomeIcon icon={faHouse} className="h-6 ml-2" />,
        active: true,
    },
    {
        label: 'Movies',
        icon: <FontAwesomeIcon icon={faFilm} className="h-6 ml-2" />,
    },
    {
        label: 'About',
        icon: <FontAwesomeIcon icon={faHeart} className="h-6 ml-2" />,
    },
];

const NavItemContainer = () => (
    <>
        {items.map((item, index) => (
            <NavItem itemProps={item} key={index} />
        ))}
    </>
);

const Nav = () => {
    const [isNavItem, setIsNavItem] = useState(false);

    return (
        <nav className="col-span-1 bg-cyan-200">
            <div className=" mx-4 flex justify-between items-center md:block">
                <h4 className="uppercase font-bold text-primary py-1 border-b border-primary text-right">
                    Phimmoiz.net
                </h4>
                <FontAwesomeIcon
                    icon={faBars}
                    className="md:hidden cursor-pointer"
                    onClick={() => setIsNavItem(!isNavItem)}
                />
            </div>
            <div>
                <ul className={`mx-4 my-2 ${isNavItem ? '' : 'hidden'} `}>
                    <NavItemContainer />
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
