import user from './user'
import insights from './insights'
import workDay from './workDay'
import timesheet from './timesheet'
import currentPeriod from './currentPeriod'
import { combineReducers } from 'redux'

const mainReducer = combineReducers({ user, insights, workDay, timesheet, currentPeriod })

export default mainReducer