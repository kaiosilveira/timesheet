import isHoliday from './isHoliday'

describe(`isHoliday`, () => {

    it('should check correctly if given date is holiday', () => {
        expect(isHoliday(new Date(2019, 11, 25))).toBe(true)
    })

    it('should check correctly if given date is holiday', () => {
        expect(isHoliday(new Date(2019, 11, 26))).toBe(false)
    })

})