import isWeekDay from './isWeekDay'

describe(`isWeekDay`, () => {

    it('should check correctly if given date is a week day', () => {
        expect(isWeekDay(new Date(22, 11, 2019).getDay())).toBe(false)
    })

    it('should check correctly if given date is a week day', () => {
        expect(isWeekDay(new Date(23, 11, 2019).getDay())).toBe(true)
    })

})