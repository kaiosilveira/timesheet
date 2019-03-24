import { createActions, handleActions } from 'redux-actions'

export const SETUP_WORK_JOURNEY_TO_EDIT = 'SETUP_WORK_JOURNEY_TO_EDIT'
export const REGISTER_WORK_JOURNEY = 'REGISTER_WORK_JOURNEY'
export const REGISTER_WORK_JOURNEY_SUCCESS = 'REGISTER_WORK_JOURNEY_SUCCESS'
export const REGISTER_WORK_JOURNEY_FAILED = 'REGISTER_WORK_JOURNEY_FAILED'
export const REGISTER_WORK_JOURNEY_CANCEL = 'REGISTER_WORK_JOURNEY_CANCEL'

export const {
    setupWorkJourneyToEdit,
    registerWorkJourney,
    registerWorkJourneySuccess,
    registerWorkJourneyFailed,
} = createActions({
    SETUP_WORK_JOURNEY_TO_EDIT: workJourney => ({ workJourney }),
    REGISTER_WORK_JOURNEY: workJourney => ({ workJourney }),
    REGISTER_WORK_JOURNEY_SUCCESS: workJourney => ({ workJourney }),
    REGISTER_WORK_JOURNEY_FAILED: workJourney => ({ workJourney }),
})

const reducer = handleActions({
    SETUP_WORK_JOURNEY_TO_EDIT: (state, action) => ({ ...action.payload.workJourney }),
    REGISTER_WORK_JOURNEY_SUCCESS: () => ({}),
    REGISTER_WORK_JOURNEY_FAILED: state => ({ ...state })
}, {})

export default reducer