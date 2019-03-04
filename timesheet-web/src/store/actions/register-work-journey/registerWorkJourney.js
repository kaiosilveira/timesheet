import appendTimesheet from '../append-work-day/appendWorkDay'
import TimesheetService from '../../../api/services/timesheet.service'

const registerWorkJourney = workJourney => (dispatch, getState) => {
    const state = getState()
    return new TimesheetService(state.currentPeriod._id)
    .register(workJourney)
    .then(wd => dispatch(appendTimesheet(wd)))
}

export default registerWorkJourney