import API_URL from '../API_URL'
import 'cross-fetch/polyfill'

class TimesheetService {

    constructor(periodId) {
        this.periodId = periodId
    }

    list() {
        return fetch(`${API_URL}/timesheet/${this.periodId}`)
            .then(res => res.json(), err => console.log(err))
    }

    register(workJourney) {

        workJourney.period = this.periodId

        return fetch(`${API_URL}/timesheet/${this.periodId}`, {
            method: 'POST',
            body: JSON.stringify(workJourney),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(
            res => res.json(),
            err => console.log(err)
        )
    }
}

export default TimesheetService