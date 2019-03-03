import React, { Component } from 'react'

import Greeting from '../greetings/Greeting'
import DateInfo from '../date-info/DateInfo'
import Dashboard from '../dashboard/Dashboard'
import FabLink from '../fab-link/FabLink'

import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <DateInfo />
        <Greeting />
        <Dashboard />
        <FabLink text={'+'} path="/add" />
      </div>
    )
  }

}

export default App
