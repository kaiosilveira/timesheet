import API_URL from '../API_URL'

class TimesheetService {
    
    constructor(periodId) {
        this.periodId = periodId
    }

    list() {
        return fetch(`${API_URL}/timesheet/${this.periodId}`)
            .then(res => res.json(), err => console.log(err))
    }

    register(workJourney) {
        workJourney.period = this.periodId;
        return fetch(`${API_URL}/timesheet/${this.periodId}`, {
            'method': 'POST',
            'body': JSON.stringify(workJourney),
            'Content-Type': 'application/json',
            'mode': 'cors'
        })
        .then(res => {
            return res.json()
        }, err => console.log(err))
    }
}

export default TimesheetService