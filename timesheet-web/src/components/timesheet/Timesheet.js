import React from 'react'

import TimesheetBox from './timesheet-box/TimesheetBox'

import './Timesheet.scss'

const Timesheet = ({ timesheet, currentPeriod, editItem }) => (
    <section>
        <h2 className="list-title">Lançamentos - {currentPeriod.name}</h2>
        <div>
        {
            timesheet.map(workJourney => (
                <TimesheetBox
                    onClick={editItem}
                    key={workJourney._id}
                    workJourney={workJourney}/>
            ))
        }
        </div>
    </section>
)

export default Timesheet