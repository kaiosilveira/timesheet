import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './FabLink.css'

const FabLink = ({ path, text }) => (
    <NavLink className="fab" to={path} style={{ textDecoration: 'none', color: '#fff' }}>
      <span className="text">{text}</span>
    </NavLink>
)

FabLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default FabLink