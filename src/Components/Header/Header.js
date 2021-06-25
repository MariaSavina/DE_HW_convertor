import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = () => {
    return(
        <div className="header">
            <h1 className="header__name">Convertor</h1>
            <div className="header__buttons">
            <NavLink to='/' >
                <button className="header__button">Length</button>
            </NavLink>
            <NavLink to='/currency' >
                <button className="header__button">Currency</button>
            </NavLink>
            </div>
        </div>
    )
}

export default Header