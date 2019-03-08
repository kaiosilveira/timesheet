import insights from './insights'
import { RECEIVE_INSIGHTS } from '../../actions/ACTION_TYPES'

describe('insights reducer', () => {

    it('should return the initial state', () => {
        expect(insights(undefined, {})).toEqual([])
    })

    it('should handle RECEIVE_INSIGHTS', () => {
        const items = [{
            text: 'faturados esse mês',
            highlight: false
        }];
        expect(insights([], {
            type: RECEIVE_INSIGHTS,
            insights: items
        })).toEqual(items)
    })

})