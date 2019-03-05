import { IS_AUTHORIZED } from '../ACTION_TYPES'

const isAuthorized = isAuthorized => ({ type: IS_AUTHORIZED, isAuthorized })

export default isAuthorized