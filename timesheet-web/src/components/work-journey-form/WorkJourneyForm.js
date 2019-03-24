import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import WORK_HOURS, { PAUSE_HOURS } from '../../constraints/WORK_HOURS'

import './WorkJourneyForm.css'

class WorkJourneyForm extends React.Component {

    constructor(props) {
        super(props)
        const { workJourneyItem } = this.props
        this.state = { workJourneyItem }
        this.handleFromChange = this.handleFromChange.bind(this)
        this.handleToChange = this.handleToChange.bind(this)
        this.handlePauseChange = this.handlePauseChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
    }

    handleFromChange(e) {
        this.setState({ workJourneyItem: { ...this.state.workJourneyItem, from: e.target.value } })
    }

    handleToChange(e) {
        this.setState({ workJourneyItem: { ...this.state.workJourneyItem, to: e.target.value } })
    }

    handlePauseChange(e) {
        this.setState({ workJourneyItem: { ...this.state.workJourneyItem, pause: e.target.value } })
    }

    handleDateChange(e) {
        this.setState({ workJourneyItem: { ...this.state.workJourneyItem, date: e.target.value } })
    }

    render() {
        const { onSubmit, history } = this.props
        return (
            <section>
                <h2 className="subtitle">Registrar horas</h2>
                <form className="form" onSubmit={e => {
                    e.preventDefault()
                    onSubmit(this.state.workJourneyItem)
                }}>
                    <div className="field-group">
                        <label className="label">Das:</label>
                        <select className="select-box"
                            value={this.state.workJourneyItem.from}
                            onChange={this.handleFromChange}
                        >
                            {WORK_HOURS.map(wh => (<option key={wh.value} value={wh.value}>{wh.label}</option>))}
                        </select>
                    </div>

                    <div className="field-group">
                        <label className="label">Ás:</label>
                        <select className="select-box"
                            value={this.state.workJourneyItem.to}
                            onChange={this.handleToChange}
                        >
                            {WORK_HOURS.map(wh => (<option key={wh.value} value={wh.value}>{wh.label}</option>))}
                        </select>
                    </div>
                    <div className="field-group">
                        <label className="label">Pausa:</label>
                        <select className="select-box"
                            value={this.state.workJourneyItem.pause}
                            onChange={this.handlePauseChange}
                        >
                            {PAUSE_HOURS.map(ph => (<option key={ph.value} value={ph.value}>{ph.label}</option>))}
                        </select>
                    </div>
                    <div className="field-group">
                        <label className="label">Data:</label>
                        <input type="date" className="input"
                            value={this.state.workJourneyItem.date}
                            onChange={this.handleDateChange}
                        />
                    </div>
                    <div className="actions">
                        <button className="btn is-half-width" onClick={() => history.push('/')}>Voltar</button>
                        <button type="submit" className="btn is-primary is-half-width">Salvar</button>
                    </div>
                </form>
            </section>
        )
    }
}

WorkJourneyForm.propTypes = {
    history: PropTypes.object.isRequired
}

export default WorkJourneyForm