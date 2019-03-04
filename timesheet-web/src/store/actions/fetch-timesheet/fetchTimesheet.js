import TimesheetService from '../../../api/services/timesheet.service'
import receiveTimesheet from '../receive-timesheet/receiveTimesheet'

const fetchTimesheet = period => dispatch => new TimesheetService(period._id)
    .list()
    .then(timesheet => dispatch(receiveTimesheet(timesheet)))

export default fetchTimesheet