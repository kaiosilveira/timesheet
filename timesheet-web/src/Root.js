import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Router, Route, Redirect } from 'react-router-dom'
import * as jwt_decode from 'jwt-decode'

import Navbar from './components/_shared/navbar/Navbar'
import Home from './components/home/Home'
import WorkJourneyFormPage from './pages/WorkJourneyFormPage'
import TimesheetPage from './pages/TimesheetPage'
import LoginPage from './pages/LoginPage'

import { restablishUserConnection } from './store/user/duck'

import { library } from '@fortawesome/fontawesome-svg-core'
import configureFontAwesomeIcons, { solidIcons } from './icons'

configureFontAwesomeIcons(library, solidIcons)

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

        store.dispatch(restablishUserConnection(user))

    }

    render() {
        const { store, history, context } = this.props

        return (
            <Provider store={store}>
            <ConnectedRouter history={history} context={context}>
                <Router history={history}>
                    <div>
                        <Navbar title="Timesheet"/>
                        <Route path="/login" component={LoginPage} />
        
                        <Route exact path="/" render={
                            props => Protected(this.isAuthorized(), Home, props)
                        } />

                        <Route exact path="/form" render={
                            props => Protected(this.isAuthorized(), WorkJourneyFormPage, props)
                        } />

                        <Route path="/form/:id" render={
                            props => Protected(this.isAuthorized(), WorkJourneyFormPage, props)
                        } />

                        <Route path="/timesheet" render={
                            props => Protected(this.isAuthorized(), TimesheetPage, props)
                        } />
                    </div>
                </Router>
            </ConnectedRouter>
            </Provider>
        )
    }

    isAuthorized() {
        const { store } = this.props
        const authed = !!store.getState().user._id
        return authed
    }
}

export default Root