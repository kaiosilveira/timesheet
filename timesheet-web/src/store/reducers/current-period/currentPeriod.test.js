import currentPeriod from './currentPeriod';
import { RECEIVE_CURRENT_PERIOD } from '../../actions/ACTION_TYPES';

describe(`current period reducer`, () => {

    it('should return the initial state', () => {
        expect(currentPeriod(undefined, {})).toEqual({ _id: '', name: '' })
    })

    it('should handle RECEIVE_CURRENT_PERIOD', () => {
        expect(currentPeriod({}, {
            type: RECEIVE_CURRENT_PERIOD,
            period: {
                _id: '43jk42jk43',
                name: 'Março - 2019'
            }
        })).toEqual({
            _id: '43jk42jk43',
            name: 'Março - 2019'
        })
    })

})