import React from 'react'
import PropTypes from 'prop-types'

const ErrorMsg = ({ text, visible }) => visible ? (<span>{text}</span>) : null

ErrorMsg.propTypes = {
    text: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired
}

export default ErrorMsg