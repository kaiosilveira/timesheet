import { APPEND_WORK_DAY } from './ACTION_TYPES'

const appendTimesheet = workDay => ({ type: APPEND_WORK_DAY, workDay })

export default appendTimesheet