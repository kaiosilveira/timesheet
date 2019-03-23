import { createActions, handleActions } from 'redux-actions'

export const FETCH_INSIGHTS = 'FETCH_INSIGHTS'
export const FETCH_INSIGHTS_CANCEL = 'FETCH_INSIGHTS_CANCEL'
export const FETCH_INSIGHTS_SUCCESS = 'FETCH_INSIGHTS_SUCCESS'
export const FETCH_INSIGHTS_ERROR = 'FETCH_INSIGHTS_ERROR'

export const {
    fetchInsights,
    fetchInsightsSuccess,
    fetchInsightsError
} = createActions({
    FETCH_INSIGHTS: () => ({}),
    FETCH_INSIGHTS_SUCCESS: insights => ({ insights }),
    FETCH_INSIGHTS_ERROR: error => ({ error })
})

const reducer = handleActions({
    FETCH_INSIGHTS_SUCCESS: (state, action) => [...action.payload],
    FETCH_INSIGHTS_ERROR: state => [...state]
}, [])

export default reducer