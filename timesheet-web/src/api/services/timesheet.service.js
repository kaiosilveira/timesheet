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

    edit(workJourney) {
        workJourney.period = this.periodId

        return fetch(`${API_URL}/timesheet/${this.periodId}/workjourney/${workJourney._id}`, {
            method: 'PUT',
            body: JSON.stringify(workJourney),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    }

    getWorkJourneyItem(id) {
        return fetch(`${API_URL}/timesheet/${this.periodId}/workjourney/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
    }
}

export default TimesheetService