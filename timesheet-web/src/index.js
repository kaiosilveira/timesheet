import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'

import store from './store/store'
import fetchUser from './store/actions/fetch-user/fetchUser'
import fetchTimesheet from './store/actions/fetch-timesheet/fetchTimesheet'
import fetchCurrentPeriod from './store/actions/fetch-current-period/fetchCurrentPeriod'

import './index.css'

store
.dispatch(fetchUser())
.then(() => store.dispatch(fetchCurrentPeriod(store.getState().user._id)))
.then(() => store.dispatch(fetchTimesheet(store.getState().currentPeriod)))

ReactDOM.render(<Root store={store}/>, document.getElementById('root'))
