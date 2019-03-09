import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = ({ title }) => (
    <div className="navbar">
        <span className="navbar-title">{title}</span>
        <ul className="menu">
            <li>
                <span>
                    <FontAwesomeIcon icon="bars" />
                </span>
            </li>
        </ul>
    </div>
)

export default Navbar