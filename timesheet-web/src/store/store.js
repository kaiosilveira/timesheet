import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'

import rootReducer from './rootReducer'
import { createLogicMiddleware } from 'redux-logic'
import timesheetLogic from './timesheet/logic'
import periodLogic from './period/logic'
import userLogic from './user/logic'
import workJourneyLogic from './work-journey/logic'

export const history = createBrowserHistory()

const arrLogic = [...timesheetLogic, ...periodLogic, ...userLogic, ...workJourneyLogic]
const logicMiddleware = createLogicMiddleware(arrLogic)

export default function configureStore() {
    return createStore(rootReducer(history), {}, compose(
        applyMiddleware(routerMiddleware(history), thunkMiddleware, logicMiddleware)
    ))
}