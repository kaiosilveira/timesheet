import React from 'react'

import MONTHS from '../../../../constraints/MONTHS'
import decimalToHour from '../../../../utils/decimal-to-hour/decimalToHour'

import './TimesheetBoxHeader.scss'

const TimesheetBoxHeader = ({ workJourney }) => {
    const date = new Date(workJourney.date)
    return (
        <div className="timesheet-box-header">
            <span>
                {date.getUTCDate()} de {MONTHS[date.getUTCMonth()].name}, &ensp;
            </span>
            <span>
                {decimalToHour(workJourney.to - workJourney.from - workJourney.pause)} trabalhadas
            </span>
        </div>
    )
}

export default TimesheetBoxHeader