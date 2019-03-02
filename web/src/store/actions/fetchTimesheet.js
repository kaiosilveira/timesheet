import TimesheetService from '../../api/timesheet-service'
import receiveTimesheet from './receiveTimesheet'

const timesheetService = new TimesheetService()

const fetchTimesheet = () => dispatch => timesheetService
.list()
.then(timesheet => dispatch(receiveTimesheet(timesheet)))

export default fetchTimesheet