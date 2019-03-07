import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Redirect } from 'react-router-dom'

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
import { ConnectedRouter, push } from 'connected-react-router'

library.add(faBars)

const Protected = (authed, Component, props) => authed
    ? <Component {...props} />
    : <Redirect to="/login" />

class Root extends React.Component {

    componentWillMount() {        

        const { store } = this.props
        const token = localStorage.getItem('token')

        if (!token) { return }

        const user = jwt_decode(token)
        
        if (!user) { return }

        store.dispatch(receiveUser(user))
        store.dispatch(isAuthorized(true))

        store
        .dispatch(fetchCurrentPeriod(user._id))
        .then(() => store.dispatch(fetchTimesheet(store.getState().currentPeriod._id)))
        .then(() => store.dispatch(push('/')))
    }

    render() {
        const { store, history, context } = this.props

        return (
            <Provider store={store}>
            <ConnectedRouter history={history} context={context}>
                <Router history={history}>
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
            </ConnectedRouter>
            </Provider>
        )
    }
}

export default Root