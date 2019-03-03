import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import mainReducer from './reducers/mainReducer'

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware))

export default store