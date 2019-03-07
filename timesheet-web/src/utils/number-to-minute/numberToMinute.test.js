import numberToMinute from './numberToMinute';

describe('numberToMinute', () => {

    it('should cast number 0 to 00 minutes', () => {
        expect(numberToMinute(0)).toEqual('00');
    })

    it('should cast number 25 to 15 minutes', () => {
        expect(numberToMinute(25)).toEqual('15');
    })

    it('should cast number 50 to 30 minutes', () => {
        expect(numberToMinute(50)).toEqual('30');
    })

    it('should cast number 75 to 45 minutes', () => {
        expect(numberToMinute(75)).toEqual('45');
    })

})