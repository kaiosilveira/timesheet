import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import App from './components/app/App'
import HourForm from './components/hour-form/HourForm'
import Login from './components/login/Login'
import fetchCurrentPeriod from './store/actions/fetch-current-period/fetchCurrentPeriod'
import fetchTimesheet from './store/actions/fetch-timesheet/fetchTimesheet'
import receiveUser from './store/actions/receive-user/receiveUser'

import * as jwt_decode from 'jwt-decode'
import isAuthorized from './store/actions/is-authorized/isAuthorized'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

const Protected = (authed, Component, props) => authed
    ? <Component {...props} />
    : <Redirect to="/login" />

class Root extends React.Component {

    componentWillMount() {        

        const { store } = this.props
        const token = localStorage.getItem('token')
        const user = jwt_decode(token)
        
        if (!token || !user) { return }

        store.dispatch(receiveUser(user))
        store.dispatch(isAuthorized(true))

        store
        .dispatch(fetchCurrentPeriod(user._id))
        .then(() => store.dispatch(fetchTimesheet(store.getState().currentPeriod)))
    }

    render() {
        const { store } = this.props

        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route path="/login" component={Login} />
        
                        <Route exact path="/" render={
                            props => Protected(store.getState().isAuthorized, App, props)
                        } />
        
                        <Route path="/add" render={
                            props => Protected(store.getState().isAuthorized, HourForm, props)
                        } />
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default Root