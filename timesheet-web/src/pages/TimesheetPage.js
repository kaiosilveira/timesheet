import React from 'react'
import Timesheet from '../components/timesheet/Timesheet'

import { connect } from 'react-redux'

const TimesheetPage = ({ timesheet, currentPeriod }) => (
    <Timesheet timesheet={timesheet} currentPeriod={currentPeriod} />
)

const mapStateToProps = ({ timesheet, currentPeriod }) => ({ timesheet, currentPeriod })
export default connect(mapStateToProps)(TimesheetPage)