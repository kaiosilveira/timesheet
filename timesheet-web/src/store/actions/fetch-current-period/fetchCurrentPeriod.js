import PeriodService from '../../../api/services/period.service'
import receiveCurrentPeriod from '../receive-current-period/receiveCurrentPeriod'

const fetchCurrentPeriod = userId => dispatch => new PeriodService(userId)
    .getCurrent()
    .then(period => dispatch(
        receiveCurrentPeriod(period))
    )

export default fetchCurrentPeriod