import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './components/app/App'
import HourForm from './components/hour-form/HourForm'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/add" component={HourForm} />
            </div>
        </Router>
    </Provider>
)

export default Root