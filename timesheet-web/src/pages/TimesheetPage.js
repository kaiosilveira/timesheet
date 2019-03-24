import React from 'react'
import Timesheet from '../components/timesheet/Timesheet'

import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { setupWorkJourneyToEdit } from '../store/work-journey/duck'

const TimesheetPage = ({ timesheet, currentPeriod, editItem }) => (
    <Timesheet timesheet={timesheet} currentPeriod={currentPeriod} editItem={editItem} />
)

const mapStateToProps = ({ timesheet, currentPeriod }) => ({ timesheet, currentPeriod })

const mapDispatchToProps = dispatch => ({
    editItem: item => {
        dispatch(setupWorkJourneyToEdit(item))
        dispatch(push(`form/${item._id}`))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TimesheetPage)
