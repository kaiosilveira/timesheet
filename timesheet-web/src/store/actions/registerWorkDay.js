import appendTimesheet from './appendWorkDay'
import TimesheetService from '../../api/services/timesheet.service'

const registerWorkDay = workDay => (dispatch, getState) => {
    const state = getState()
    return new TimesheetService(state.currentPeriod._id)
    .register(workDay)
    .then(wd => dispatch(appendTimesheet(wd)))
}

export default registerWorkDay