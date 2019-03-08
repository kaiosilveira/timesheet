import { IS_AUTHORIZED } from '../../actions/ACTION_TYPES'

const isAuthorized = (state = false, { type, isAuthorized }) => {
    switch (type) {
        case IS_AUTHORIZED:
            return isAuthorized
        default:
            return state
    }
}
export default isAuthorized