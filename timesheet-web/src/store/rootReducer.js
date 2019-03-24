import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import timesheet from './timesheet/duck'
import workJourneyItem from './work-journey/duck'
import currentPeriod from './period/duck'
import user from './user/duck'

export default history => combineReducers({
    router: connectRouter(history),
    user,
    timesheet,
    currentPeriod,
    workJourneyItem
})