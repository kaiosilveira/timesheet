import TimesheetService from '../../../api/services/timesheet.service'
import receiveTimesheet from '../receive-timesheet/receiveTimesheet'

const fetchTimesheet = periodId => dispatch => new TimesheetService(periodId)
    .list()
    .then(timesheet => dispatch(receiveTimesheet(timesheet)))

export default fetchTimesheet