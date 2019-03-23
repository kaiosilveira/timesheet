import reducer, {
    fetchCurrentPeriod,
    FETCH_CURRENT_PERIOD,
    fetchCurrentPeriodSuccess,
    FETCH_CURRENT_PERIOD_SUCCESS,
    fetchCurrentPeriodFailed,
    FETCH_CURRENT_PERIOD_FAILED
} from './duck'

describe('period actions', () => {
    
    it('should create an fetch period action', () => {
        const userId = 'hu423h4'
        expect(fetchCurrentPeriod(userId)).toEqual({
            type: FETCH_CURRENT_PERIOD,
            payload: { userId }
        })
    })

    it('should create a fetch period success action', () => {
        const period = { name: 'Março - 2019', userId: 'huhfad' }
        expect(fetchCurrentPeriodSuccess(period)).toEqual({
            type: FETCH_CURRENT_PERIOD_SUCCESS,
            payload: { period }
        })
    })

    it('should create a fetch current period failed action', () => {
        const error = new Error('Network error')
        expect(fetchCurrentPeriodFailed(error)).toEqual({
            type: FETCH_CURRENT_PERIOD_FAILED,
            error: true,
            payload: error
        })
    })

})

describe('period reducer', () => {

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({})
    })
 
    it('should handle fetch current period success', () => {
        const period = { name: 'Março - 2019', userId: 'huhfad' }
        expect(reducer({}, {
            type: FETCH_CURRENT_PERIOD_SUCCESS,
            payload: { period }
        })).toEqual(period)
    })

})