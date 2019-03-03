import React from 'react'
import { connect } from 'react-redux'

const Greeting = ({ name }) => (
    <h1>Olá, {name}</h1>
)

export default connect(({ user: { name } }) => ({ name }))(Greeting)