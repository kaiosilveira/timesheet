import appendTimesheet from './appendWorkDay'
import TimesheetService from '../../api/timesheet-service'

const timesheetService = new TimesheetService();

const registerWorkDay = workDay => dispatch => timesheetService
    .register(workDay)
    .then(wd => dispatch(appendTimesheet(wd)))

export default registerWorkDay