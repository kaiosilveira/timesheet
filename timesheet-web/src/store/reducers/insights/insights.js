import { RECEIVE_INSIGHTS } from '../../actions/ACTION_TYPES'

const insights = (state = [], { type, insights }) => {
    switch(type) {
        case RECEIVE_INSIGHTS:
            return [...insights]
        default:
            return state
    }
}

export default insights