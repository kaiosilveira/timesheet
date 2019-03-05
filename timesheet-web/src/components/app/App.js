import React, { Component } from 'react'

import Greeting from '../greetings/Greeting'
import DateInfo from '../date-info/DateInfo'
import Dashboard from '../dashboard/Dashboard'
import FabLink from '../_shared/fab-link/FabLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <span>Timesheet</span>
          <ul className="menu">
            <li>
              <span>
                <FontAwesomeIcon icon="bars" />
              </span>
            </li>
          </ul>
        </div>
        <DateInfo />
        <Greeting />
        <Dashboard />
        <FabLink text={'+'} path="/add" />
      </div>
    )
  }

}

export default App
