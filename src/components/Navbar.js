import React from "react";
import './NavStyle.css';
import logo from './Logo.svg';

export default function NavBar() {
  return (
    <nav className='navBar'>
      <ul className='itemContainer'>

        <li className='navItem'>
          <a href='/' className='iconContainer'>
            <img src={logo} alt='Icon' />
          </a>
        </li>

        <li className='navItem'>
          <a href='/'>Home</a>
        </li>

        <li className='navItem'>
          <a href='/'>About</a>
        </li>

      </ul>
    </nav>
  )
}
