import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store/store'
import Greeting from './components/Greeting'
import DateInfo from './components/DateInfo'
import Dashboard from './components/Dashboard'

import './App.css'
import fetchUser from './store/actions/fetchUser';

store.dispatch(fetchUser())

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <DateInfo />
          <Greeting />
          <Dashboard />
        </div>
      </Provider>
    )
  }
}

export default App
