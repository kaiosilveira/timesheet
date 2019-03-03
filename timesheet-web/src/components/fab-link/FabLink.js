import React from 'react'
import { NavLink } from 'react-router-dom'
import './FabLink.css'

const FabLink = ({ path, text }) => (
    <NavLink className="fab" to={path} style={{ textDecoration: 'none', color: '#fff' }}>
      <span className="text">{text}</span>
    </NavLink>
)

export default FabLink