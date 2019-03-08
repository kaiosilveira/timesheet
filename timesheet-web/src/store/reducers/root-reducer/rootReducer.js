import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import user from '../user/user'
import insights from '../insights/insights'
import timesheet from '../timesheet/timesheet'
import currentPeriod from '../current-period/currentPeriod'
import loginError from '../login-error/loginError'
import isAuthorized from '../is-authorized/isAuthorized'

export default history => combineReducers({
    router: connectRouter(history),
    user,
    insights,
    timesheet,
    currentPeriod,
    loginError,
    isAuthorized
})