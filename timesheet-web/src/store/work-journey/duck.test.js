import reducer, {
    REGISTER_WORK_JOURNEY, registerWorkJourney,
    REGISTER_WORK_JOURNEY_SUCCESS, registerWorkJourneySuccess,
    REGISTER_WORK_JOURNEY_FAILED, registerWorkJourneyFailed, SETUP_WORK_JOURNEY_TO_EDIT, restoreWorkJourneyFormEdit, RESTORE_WORK_JOURNEY_FORM_EDIT, restoreWorkJourneyFormEditSuccess, RESTORE_WORK_JOURNEY_FORM_EDIT_SUCCESS,
} from './duck'

describe('work journey actions', () => {

    it('should create an action to register a work journey', () => {
        const workJourney = { from: 9, to: 18, pause: 1, date: new Date() }
        expect(registerWorkJourney(workJourney)).toEqual({
            type: REGISTER_WORK_JOURNEY,
            payload: { workJourney }
        })
    })
    
    it('should create an action to append a work journey', () => {
        const workJourney = { from: 9, to: 18, pause: 1, date: new Date() }
        expect(registerWorkJourneySuccess(workJourney)).toEqual({
            type: REGISTER_WORK_JOURNEY_SUCCESS,
            payload: { workJourney }
        })
    })
    
    it('should create an action to notify if register work journey failed', () => {
        const error = new Error('Network Error')
        expect(registerWorkJourneyFailed(error)).toEqual({
            type: REGISTER_WORK_JOURNEY_FAILED,
            payload: error,
            error: true
        })
    })

    it('should create an action to restore work journey item edit state', () => {
        const workJourneyItemId = 'fs89sdfs'
        expect(restoreWorkJourneyFormEdit(workJourneyItemId)).toEqual({
            type: RESTORE_WORK_JOURNEY_FORM_EDIT,
            payload: { workJourneyItemId }
        })
    })

    it('should create an action to notify restoration of edit state succeeded', () => {
        const workJourney = { from: 9, to: 18, pause: 1, date: new Date() }
        expect(restoreWorkJourneyFormEditSuccess(workJourney)).toEqual({
            type: RESTORE_WORK_JOURNEY_FORM_EDIT_SUCCESS,
            payload: { workJourney }
        })
    })

    it('should create an action to notify restoration of edit state failed', () => {
        const error = new Error('Network Error')
        expect(registerWorkJourneyFailed(error)).toEqual({
            type: REGISTER_WORK_JOURNEY_FAILED,
            payload: error,
            error: true
        })
    })
})

describe('work journey reducer', () => {

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({})
    })

    it('should setup work journey item after SETUP_WORK_JOURNEY_TO_EDIT action', () => {
        const workJourney = { from: 9, to: 18, pause: 1, date: new Date() }
        expect(reducer({}, {
            type: SETUP_WORK_JOURNEY_TO_EDIT,
            payload: { workJourney }
        })).toEqual(workJourney)
    })

    it('should clear work journey item after REGISTER_WORK_JOURNEY_SUCCESS action', () => {
        const workJourney = { from: 9, to: 18, pause: 1, date: new Date() }
        expect(reducer(workJourney, {
            type: REGISTER_WORK_JOURNEY_SUCCESS
        })).toEqual({})
    })

    it('should return preivous state after REGISTER_WORK_JOURNEY_FAILED action', () => {
        const workJourney = { from: 9, to: 18, pause: 1, date: new Date() }
        const error = new Error('Network error')
        expect(reducer(workJourney, {
            type: REGISTER_WORK_JOURNEY_FAILED,
            payload: error,
            error: true
        })).toEqual(workJourney)
    })

})
