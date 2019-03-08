import isAuthorized from './isAuthorized'
import { IS_AUTHORIZED } from '../../actions/ACTION_TYPES'

describe('isAuthorized', () => {

    it('should return the initial state', () => {
        expect(isAuthorized(undefined, {})).toEqual(false)
    })

    it('should handle IS_AUTHORIZED', () => {
        expect(isAuthorized(false, {
            type: IS_AUTHORIZED,
            isAuthorized: true
        })).toEqual(true)
    })

})