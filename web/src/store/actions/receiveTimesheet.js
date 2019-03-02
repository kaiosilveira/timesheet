import { RECEIVE_TIMESHEET } from '../reducers/mainReducer';

const receiveTimesheet = timesheet => ({ type: RECEIVE_TIMESHEET, timesheet })
export default receiveTimesheet