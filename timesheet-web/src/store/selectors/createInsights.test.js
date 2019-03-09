import InsightsService from '../../api/services/insights.service'
import createInsights from './createInsights';

describe('createInsights', () => {

    it('should create insights based on hourValue and timesheet', () => {

        const hourValue = 55
        const timesheet = [{ from: 9, to: 18, pause: 1, date: new Date(), period: '4234fe33r' }]

        const receivedInsights = new InsightsService().createInsightCards(hourValue, timesheet)

        expect(createInsights({ user: { hourValue }, timesheet })).toEqual(receivedInsights)

    })

})