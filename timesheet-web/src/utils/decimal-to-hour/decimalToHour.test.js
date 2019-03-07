import decimalToHour from './decimalToHour'

describe('decimalToHour', () => {

    it('should cast a decimal to an hour', () => {
        const decimal = 9.5
        const hour = decimalToHour(decimal)
        expect(hour).toEqual('09:30')
    })

    it('should round zeros correctly', () => {
        expect(decimalToHour(9).split(':')[1]).toEqual('00')
    })
})