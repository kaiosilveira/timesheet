import { APPEND_WORK_JOURNEY, RECEIVE_TIMESHEET } from '../actions/ACTION_TYPES'


const timesheet = (state = [], action) => {
    switch (action.type) {
        case APPEND_WORK_JOURNEY:
            return [...state, action.workJourney]
        case RECEIVE_TIMESHEET:
            return [...action.timesheet]
        default:
            return state
    }
}

export default timesheet