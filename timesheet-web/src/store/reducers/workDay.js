import { APPEND_WORK_JOURNEY } from '../actions/ACTION_TYPES'

const initialState = { from: 0, to: 0, pause: 0 }

const workDay = (state = initialState, { type, workDay }) => {
    switch (type) {
        case APPEND_WORK_JOURNEY:
            return { ...workDay }
        default:
            return { ...state }
    }
}

export default workDay