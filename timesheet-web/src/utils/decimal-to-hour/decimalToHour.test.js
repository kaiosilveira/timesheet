import decimalToHour from './decimalToHour';

describe('decimalToHour', () => {

    it('should cast a decimal to an hour', () => {
        const decimal = 9.5
        const hour = decimalToHour(decimal)
        expect(hour).toEqual('09:30')
    })

})