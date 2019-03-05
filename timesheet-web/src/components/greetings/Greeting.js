import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Greeting = ({ name }) => (
    <h1>Olá, {name}</h1>
)

Greeting.propTypes = {
    name: PropTypes.string.isRequired
}

export default connect(({ user: { name } }) => ({ name }))(Greeting)