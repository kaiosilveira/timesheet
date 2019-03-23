import { EDIT_WORK_JOURNEY } from '../../actions/ACTION_TYPES'

const editWorkJouney = (state, { type, workJourney }) => {
    switch (type) {
        case EDIT_WORK_JOURNEY:
            return { ...workJourney }
        default:
            return state
    }
}

export default editWorkJouney