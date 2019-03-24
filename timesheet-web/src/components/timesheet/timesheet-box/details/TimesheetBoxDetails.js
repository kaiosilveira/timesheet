import React from 'react'

import decimalToHour from '../../../../utils/decimal-to-hour/decimalToHour'

import './TimesheetBoxDetails.scss'

const TimesheetBoxDetails = ({ workJourney }) => (
    <div className="work-journey-details">
        <span className="hour-badge start">
            das {decimalToHour(workJourney.from)}
        </span>
        <span className="hour-badge end">
            ás {decimalToHour(workJourney.to)}
        </span>
        <span className="hour-badge pause">
            pausa {decimalToHour(workJourney.pause)}
        </span>
    </div>
)

export default TimesheetBoxDetails
