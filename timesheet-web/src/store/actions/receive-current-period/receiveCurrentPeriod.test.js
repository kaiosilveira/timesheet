import { RECEIVE_CURRENT_PERIOD } from '../ACTION_TYPES'
import receiveCurrentPeriod from './receiveCurrentPeriod'

describe('receiveCurrentPeriod', () => {

    it('should create an action to receive current period', () => {
        const period = { _id: '8u3248u3', name: 'Març0 - 2019' }
        const expectedAction = { type: RECEIVE_CURRENT_PERIOD, period }
        expect(receiveCurrentPeriod(period)).toEqual(expectedAction);
    })

})