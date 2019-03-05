import getTotalWeekDaysUntilTheEndOfMonth from './getTotalWeekDaysUntilTheEndOfMonth'

describe('getTotalWeekDaysUntilTheEndOfMonth', () => {
    
    it('should return total weekdays until the end of the month', () => {
        const d = new Date(2019, 2, 4)
        expect(getTotalWeekDaysUntilTheEndOfMonth(d)).toEqual(18)
    })

})