import user from './user'
import insights from './insights'
import workDay from './workDay'
import timesheet from './timesheet'
import { combineReducers } from '../../../../../../../Library/Caches/typescript/3.3/node_modules/redux';

export const FETCH_USER = 'FETCH_USER'
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_INSIGHTS = 'RECEIVE_INSIGHTS'
export const REGISTER_WORK_DAY = 'REGISTER_WORK_DAY'
export const APPEND_WORK_DAY = 'APPEND_WORK_DAY'
export const RECEIVE_TIMESHEET = 'RECEIVE_TIMESHEET'

const mainReducer = combineReducers({ user, insights, workDay, timesheet })

export default mainReducer