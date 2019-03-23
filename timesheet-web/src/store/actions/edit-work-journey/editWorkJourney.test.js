import { EDIT_WORK_JOURNEY } from '../ACTION_TYPES'
import editWorkJourney from './editWorkJourney'

describe('editWorkJourney', () => {

    it ('should emit an action to edit a work journey', () => {
        
        const workJourney = {
            from: 9,
            to: 18,
            pause: 1,
            date: new Date(),
            period: '32u8432u8'
        }

        expect(editWorkJourney(workJourney)).toEqual({
            type: EDIT_WORK_JOURNEY,
            workJourney
        })

    })

})