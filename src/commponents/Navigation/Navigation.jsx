import React from 'react'
import { NavLink } from 'react-router-dom';
import "./navigation.scss"

function Navigation() {
  return (
    <nav className="navbar">
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/memory"}>Memory</NavLink></li>
            <li><NavLink to={"/rolldice"}>RollDice</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navigation