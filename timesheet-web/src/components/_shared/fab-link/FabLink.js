import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './FabLink.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FabLink = ({ path, icon }) => (
    <NavLink className="fab" to={path} style={{ textDecoration: 'none', color: '#fff' }}>
      <span className="text">
        <FontAwesomeIcon icon={icon} />
      </span>
    </NavLink>
)

FabLink.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default FabLink