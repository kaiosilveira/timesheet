import configureMockStore from 'redux-mock-store'

import { EDIT_WORK_JOURNEY } from '../../actions/ACTION_TYPES'
import editWorkJouney from './editWorkJourney'

const mockStore = configureMockStore([])

describe('editWorkJouney', () => {

    it('should return initial state', () => {
        expect(editWorkJouney({}, {})).toEqual({})
    })

    it('should update selected workjourney to update', () => {
        
        const workJourney = {
            from: 9,
            to: 18,
            pause: 1,
            date: new Date(),
            period: '32u8432u8'
        }

        expect(editWorkJouney({}, { type: EDIT_WORK_JOURNEY, workJourney })).toEqual(workJourney)

    })

})