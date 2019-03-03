import { createSelector } from 'reselect'
import InsightsService from '../../api/services/insights.service'

const getHourValue = state => state.user.hourValue
const getTimesheet = state => state.timesheet

const createInsights = createSelector(
    [getHourValue, getTimesheet],
    (hourValue, timesheet) => new InsightsService().createInsightCards(hourValue, timesheet)
)

export default createInsights