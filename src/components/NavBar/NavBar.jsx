import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar(props) {
    return (
        <div className='nav-container'>
            <Link to='/'>
                <img
                    src='data:image/png;base64,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'
                    alt="Imagen de adidas"
                />
            </Link>
            <ul className='nav'>
                <li><NavLink to='/category/Balones' className={nav => nav.isActive ? 'nav-active' : ''}>Balones</NavLink></li>
                <li><NavLink to='/category/accesorios' className={nav => nav.isActive ? 'nav-active' : ''}>Accesorios</NavLink></li>
                <li><NavLink to='/category/ropadeportiva' className={nav => nav.isActive ? 'nav-active' : ''}>Ropa Deportiva</NavLink></li>
            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;