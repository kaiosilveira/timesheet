import React from 'react'

import Greeting from '../greetings/Greeting'
import DateInfo from '../date-info/DateInfo'
import Dashboard from '../dashboard/Dashboard'
import FabLink from '../_shared/fab-link/FabLink'
import PeriodInfo from '../period-info/PeriodInfo'

import './Home.css'

const Home = () => (
  <section className="App">
    <main className="main-content">
      <DateInfo />
      <Greeting />
      <PeriodInfo />
    </main>
    <Dashboard />
    <FabLink icon="plus" path="/form" />
  </section>
)

export default Home
