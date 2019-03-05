import getTotalWeekDaysOfMonth from '../get-total-weekdays-of-month/getTotalWeekDaysOfMonth'

describe('getTotalWeekDaysOfCurrentMonth', () => {

    it('should return total weekdays from a month', () => {
        const d = new Date(2019, 2, 1)
        console.log(d)
        expect(getTotalWeekDaysOfMonth(d)).toEqual(21)
    })

})