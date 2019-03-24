import { createActions, handleActions } from 'redux-actions'

export const SETUP_WORK_JOURNEY_TO_EDIT = 'SETUP_WORK_JOURNEY_TO_EDIT'
export const REGISTER_WORK_JOURNEY = 'REGISTER_WORK_JOURNEY'
export const REGISTER_WORK_JOURNEY_SUCCESS = 'REGISTER_WORK_JOURNEY_SUCCESS'
export const REGISTER_WORK_JOURNEY_FAILED = 'REGISTER_WORK_JOURNEY_FAILED'
export const REGISTER_WORK_JOURNEY_CANCEL = 'REGISTER_WORK_JOURNEY_CANCEL'
export const RESTORE_WORK_JOURNEY_FORM_EDIT = 'RESTORE_WORK_JOURNEY_FORM_EDIT'
export const RESTORE_WORK_JOURNEY_FORM_EDIT_SUCCESS = 'RESTORE_WORK_JOURNEY_FORM_EDIT_SUCCESS'
export const RESTORE_WORK_JOURNEY_FORM_EDIT_ERROR = 'RESTORE_WORK_JOURNEY_FORM_EDIT_ERROR'

export const {
    setupWorkJourneyToEdit,
    registerWorkJourney,
    registerWorkJourneySuccess,
    registerWorkJourneyFailed,
    restoreWorkJourneyFormEdit,
    restoreWorkJourneyFormEditSuccess,
    restoreWorkJourneyFormEditError, 
} = createActions({
    SETUP_WORK_JOURNEY_TO_EDIT: workJourney => ({ workJourney }),
    REGISTER_WORK_JOURNEY: workJourney => ({ workJourney }),
    REGISTER_WORK_JOURNEY_SUCCESS: workJourney => ({ workJourney }),
    REGISTER_WORK_JOURNEY_FAILED: error => ({ error }),
    RESTORE_WORK_JOURNEY_FORM_EDIT: workJourneyItemId => ({ workJourneyItemId }),
    RESTORE_WORK_JOURNEY_FORM_EDIT_SUCCESS: workJourney => ({ workJourney }),
    RESTORE_WORK_JOURNEY_FORM_EDIT_ERROR: error => ({ error }),
})

const reducer = handleActions({
    SETUP_WORK_JOURNEY_TO_EDIT: (state, action) => ({ ...action.payload.workJourney }),
    RESTORE_WORK_JOURNEY_FORM_EDIT_SUCCESS: (state, action) => ({ ...action.payload.workJourney }),
    REGISTER_WORK_JOURNEY_SUCCESS: () => ({}),
    REGISTER_WORK_JOURNEY_FAILED: state => ({ ...state })
}, {})

export default reducer