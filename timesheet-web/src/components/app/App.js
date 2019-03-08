import React from 'react'

import Greeting from '../greetings/Greeting'
import DateInfo from '../date-info/DateInfo'
import Dashboard from '../dashboard/Dashboard'
import FabLink from '../_shared/fab-link/FabLink'
import Navbar from '../_shared/navbar/Navbar'

import './App.css'

const App = () => (
  <div className="App">
    <Navbar title="Timesheet"/>
    <DateInfo />
    <Greeting />
    <Dashboard />
    <FabLink icon="plus" path="/add" />
  </div>
)

export default App
