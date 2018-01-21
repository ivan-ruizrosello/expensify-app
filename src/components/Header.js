import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Coins Header</h1>
        <NavLink activeClassName='is-active' to='/' exact={true}>Dashboard<p/></NavLink>
        <NavLink activeClassName='is-active' to='/help'>Help<p/></NavLink>
    </header>
);

export default Header;