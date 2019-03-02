import { RECEIVE_INSIGHTS } from './mainReducer';

const insightsReducer = (state = [], { type, insights }) => {
    switch(type) {
        case RECEIVE_INSIGHTS:
            return [...insights]
        default:
            return state
    }
}

export default insightsReducer