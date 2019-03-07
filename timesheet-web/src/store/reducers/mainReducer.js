import user from './user'
import insights from './insights'
import timesheet from './timesheet'
import currentPeriod from './currentPeriod'
import loginError from './loginError'
import isAuthorized from './isAuthorized'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

export default history => combineReducers({
    router: connectRouter(history),
    user,
    insights,
    timesheet,
    currentPeriod,
    loginError,
    isAuthorized
})