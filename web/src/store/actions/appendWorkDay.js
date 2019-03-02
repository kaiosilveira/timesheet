import { APPEND_WORK_DAY } from '../reducers/mainReducer'

const appendTimesheet = workDay => ({ type: APPEND_WORK_DAY, workDay })

export default appendTimesheet