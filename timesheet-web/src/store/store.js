import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'

import rootReducer from './reducers/root-reducer/rootReducer'

export const history = createBrowserHistory()

export default function configureStore() {
    return createStore(rootReducer(history), {}, compose(
        applyMiddleware(routerMiddleware(history), thunkMiddleware)
    ))
}