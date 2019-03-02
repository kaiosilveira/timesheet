import { APPEND_WORK_DAY, RECEIVE_TIMESHEET } from './mainReducer';

const timesheet = (state = [], action) => {
    switch (action.type) {
        case APPEND_WORK_DAY:
            return [...state, action.workDay]
        case RECEIVE_TIMESHEET:
            return [...action.timesheet]
        default:
            return state
    }
}

export default timesheet