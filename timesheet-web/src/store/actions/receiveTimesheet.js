import { RECEIVE_TIMESHEET } from './ACTION_TYPES'

const receiveTimesheet = timesheet => ({ type: RECEIVE_TIMESHEET, timesheet })
export default receiveTimesheet