import appendTimesheet from '../append-work-day/appendWorkDay'
import TimesheetService from '../../../api/services/timesheet.service'
import { push } from 'connected-react-router'

const registerWorkJourney = workJourney => (dispatch, getState) => {
    const state = getState()
    return new TimesheetService(state.currentPeriod._id)
    .register(workJourney)
    .then(wd => dispatch(appendTimesheet(wd)))
    .then(() => push('/'))
}

export default registerWorkJourney