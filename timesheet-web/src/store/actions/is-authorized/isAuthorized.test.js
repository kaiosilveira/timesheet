import { IS_AUTHORIZED } from '../ACTION_TYPES'
import isAuthorized from './isAuthorized'

describe(`isAuthorized`, () => {

    it('should emit and action telling if user is authorized', () => {
        const action = { type: IS_AUTHORIZED, isAuthorized: true }
        expect(isAuthorized(true)).toEqual(action)
    })

})