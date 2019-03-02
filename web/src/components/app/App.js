import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Greeting from '../Greeting'
import DateInfo from '../DateInfo'
import Dashboard from '../Dashboard'

import './App.css'

const FabLink = ({ onClick, path }) => (
  <button className="fab" onClick={e => {
    e.preventDefault()
    onClick()
  }}>
    <NavLink to={path} style={{ textDecoration: 'none', color: '#fff' }}>
      <span className="text">+</span>
    </NavLink>
  </button>
)

class App extends Component {

  render() {
    return (
      <div className="App">
        <DateInfo />
        <Greeting />
        <Dashboard />
        <FabLink text={'+'} onClick={this.onAddButtonClicked} path="/add" />
      </div>
    )
  }

  onAddButtonClicked() {
    console.log('button clicked')
  }

}

export default App
