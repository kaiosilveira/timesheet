import React from 'react'
import TimesheetBoxHeader from './header/TimesheetBoxHeader'
import TimesheetBoxTasksInfo from './tasks-info/TimesheetBoxTasksInfo'
import TimesheetBoxDetails from './details/TimesheetBoxDetails'

import './TimesheetBox.scss'

const TimesheetBox = ({ workJourney, onClick }) => {
    return (
        <div className="timesheet-box" onClick={() => onClick(workJourney)}>
            <TimesheetBoxHeader workJourney={workJourney} />
            <TimesheetBoxTasksInfo tasks={workJourney.tasks} />
            <TimesheetBoxDetails workJourney={workJourney} /> 
        </div>
    )
}

export default TimesheetBox