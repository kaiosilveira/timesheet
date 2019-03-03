import { APPEND_WORK_DAY } from '../actions/ACTION_TYPES'

const initialState = { from: 0, to: 0, pause: 0 }

const workDay = (state = initialState, { type, workDay }) => {
    switch (type) {
        case APPEND_WORK_DAY:
            return { ...workDay }
        default:
            return { ...state }
    }
}

export default workDay