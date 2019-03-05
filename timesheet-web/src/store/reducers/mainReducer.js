import user from './user'
import insights from './insights'
import timesheet from './timesheet'
import currentPeriod from './currentPeriod'
import loginError from './loginError'
import isAuthorized from './isAuthorized'
import { combineReducers } from 'redux'

const mainReducer = combineReducers({ user, insights, timesheet, currentPeriod, loginError, isAuthorized })

export default mainReducer