import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import mainReducer from './reducers/mainReducer'

export const history = createBrowserHistory()

export default function configureStore() {
    return createStore(mainReducer(history), {}, compose(
        applyMiddleware(routerMiddleware(history), thunkMiddleware)
    ))
}