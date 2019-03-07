import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'

import configureStore, { history } from './store/store'
import './index.css'

const store = configureStore()

ReactDOM.render(<Root history={history} store={store}/>, document.getElementById('root'))
