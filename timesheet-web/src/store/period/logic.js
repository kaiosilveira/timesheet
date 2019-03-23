import { createLogic } from 'redux-logic'

import PeriodService from '../../api/services/period.service'
import {
    FETCH_CURRENT_PERIOD,
    RESTABLISH_CURRENT_PERIOD,
    RESTABLISH_CURRENT_PERIOD_CANCEL,
    FETCH_CURRENT_PERIOD_CANCEL,
    fetchCurrentPeriodSuccess,
    fetchCurrentPeriodFailed
} from './duck'
import { restablishTimesheet } from '../timesheet/duck'

export const restablishCurrentPeriodLogic = createLogic({

    type: RESTABLISH_CURRENT_PERIOD,

    cancelType: RESTABLISH_CURRENT_PERIOD_CANCEL, 

    latest: true,

    process({ action }, dispatch, done) {

        new PeriodService(action.payload.userId)
        .getCurrent()
        .then(period => {
            dispatch(fetchCurrentPeriodSuccess(period))
            dispatch(restablishTimesheet(period._id))
        })
        .catch(err => {
            console.log(err)
            dispatch(fetchCurrentPeriodFailed(err))
        })
        .then(() => done())
    }

})

export const fetchCurrentPeriodLogic = createLogic({
    
    type: FETCH_CURRENT_PERIOD,

    cancelType: FETCH_CURRENT_PERIOD_CANCEL,
    
    latest: true,

    process({ action }, dispatch, done) {
        new PeriodService(action.payload.userId)
        .getCurrent()
        .then(period => {
            dispatch(fetchCurrentPeriodSuccess(period))
        })
        .catch(err => {
            console.log(err)
            dispatch(fetchCurrentPeriodFailed(err))
        })
        .then(() => done())
    }
})

export default [
    fetchCurrentPeriodLogic,
    restablishCurrentPeriodLogic
]