import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import './Navbar.scss'

const Navbar = ({ title }) => (
    <div className="navbar">
        <span className="navbar-title">{title}</span>
        <ul className="menu">
            <li>
                <div className="dropdown-menu-wrapper">
                    <span>
                        <FontAwesomeIcon icon="bars" />
                    </span>
                    <div className="dropdown-menu">
                        <ul className="menu-items">
                            <li className="menu-item">
                                <Link className="link" to="/">Home</Link>
                            </li>
                            <li className="menu-item">
                                <Link className="link" to="/timesheet">Timesheet</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
)

export default Navbar