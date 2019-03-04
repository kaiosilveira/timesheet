import appendWorkDay from './appendWorkDay'
import { APPEND_WORK_JOURNEY } from '../ACTION_TYPES'

describe('appendWorkJourney', () => {
    it('should create an action to append a work journey', () => {
        const workJourney = { from: 9, to: 18, pause: 1, period: '32432423', date: new Date() }
        const expectedAction = { type: APPEND_WORK_JOURNEY, workJourney }
        expect(appendWorkDay(workJourney)).toEqual(expectedAction)
    })
})