import padLeft from './padLeft'

describe('padLeft', () => {

    it('should pad a number lower than 10', () => {
        expect(padLeft(1)).toEqual('01')
    })

    it('shouldnt pad a number greater than 10', () => {
        expect(padLeft(11)).toEqual('11')
    })
})