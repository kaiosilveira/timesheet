import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { registerWorkJourney, restoreWorkJourneyFormEdit } from '../store/work-journey/duck'
import WorkJourneyForm from '../components/work-journey-form/WorkJourneyForm'

class WorkJourneyFormPage extends React.Component {

    componentWillMount() {

        const { match: { params: { id }}, restoreWorkJourneyFormEdit } = this.props

        if(!id) { return }

        restoreWorkJourneyFormEdit(id)

    }

    render() {
        const { workJourneyItem, onSubmit, history } = this.props
        return (
            <WorkJourneyForm
                workJourneyItem={workJourneyItem}
                onSubmit={onSubmit}
                history={history}
            />
        )
    }

}

const mapStateToProps = ({ workJourneyItem }) => ({ workJourneyItem })

const mapDispatchToProps = dispatch => ({
    onSubmit: workJourneyItem => {
        return dispatch(registerWorkJourney(workJourneyItem))
    },
    restoreWorkJourneyFormEdit: id => dispatch(restoreWorkJourneyFormEdit(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WorkJourneyFormPage))