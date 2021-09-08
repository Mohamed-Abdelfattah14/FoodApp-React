import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className="bar">
            <nav className="navbar navbar-expand-lg">
                <div className="container container-fluid">
                    <h3 className="logo"><span>Re</span>sto</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="a" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="a" to="/menu">Menu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="a" to="/cart">Cart</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="a" to="/login">Log In</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
