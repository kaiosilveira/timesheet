import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root'

import store from './store/store'
import fetchUser from './store/actions/fetchUser'
import fetchTimesheet from './store/actions/fetchTimesheet'

store
.dispatch(fetchUser())
.then(() => store.dispatch(fetchTimesheet(store.getState().user)))

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
