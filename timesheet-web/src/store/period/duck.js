import { createActions, handleActions } from 'redux-actions'

export const FETCH_CURRENT_PERIOD = 'FETCH_CURRENT_PERIOD'
export const FETCH_CURRENT_PERIOD_SUCCESS = 'FETCH_CURRENT_PERIOD_SUCCESS'
export const FETCH_CURRENT_PERIOD_FAILED = 'FETCH_CURRENT_PERIOD_FAILED'
export const FETCH_CURRENT_PERIOD_CANCEL = 'FETCH_CURRENT_PERIOD_CANCEL'
export const RESTABLISH_CURRENT_PERIOD = 'RESTABLISH_CURRENT_PERIOD'
export const RESTABLISH_CURRENT_PERIOD_CANCEL = 'RESTABLISH_CURRENT_PERIOD_CANCEL'

export const {
    fetchCurrentPeriod,
    fetchCurrentPeriodSuccess,
    fetchCurrentPeriodFailed,
    restablishCurrentPeriod
} = createActions({
    FETCH_CURRENT_PERIOD: userId => ({ userId }),
    FETCH_CURRENT_PERIOD_SUCCESS: period => ({ period }),
    FETCH_CURRENT_PERIOD_FAILED: error => ({ error }),
    RESTABLISH_CURRENT_PERIOD: userId => ({ userId })
})

const reducer = handleActions({
    [FETCH_CURRENT_PERIOD_SUCCESS]: (state, { payload }) => ({ ...payload.period }),
    [FETCH_CURRENT_PERIOD_FAILED]: state => state
}, {})

export default reducer
