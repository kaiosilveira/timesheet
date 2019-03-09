import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import registerWorkJourney from '../../store/actions/register-work-journey/registerWorkJourney'
import WORK_HOURS, { PAUSE_HOURS } from '../../constraints/WORK_HOURS'

import './HourForm.css'

const HourForm = props => {

    const { onSubmit, history } = props;
    let from, to, pause, date;

    return (
        <section>
            <h2 className="subtitle">Registrar horas</h2>
            <form className="form" onSubmit={e => {
                e.preventDefault()
                onSubmit(parseInt(from.value), parseInt(to.value), parseInt(pause.value), date)
            }}>
                <div className="field-group">
                    <label className="label">Das:</label>
                    <select className="select-box" ref={ node => from = node }>
                        {WORK_HOURS.map(wh => (<option key={wh.value} value={wh.value}>{wh.label}</option>))}
                    </select>
                </div>

                <div className="field-group">
                    <label className="label">Ás:</label>
                    <select className="select-box" ref={ node => to = node }>
                        {WORK_HOURS.map(wh => (<option key={wh.value} value={wh.value}>{wh.label}</option>))}
                    </select>
                </div>
                <div className="field-group">
                    <label className="label">Pausa:</label>
                    <select className="select-box" ref={ node => pause = node }>
                        {PAUSE_HOURS.map(ph => (<option key={ph.value} value={ph.value}>{ph.label}</option>))}
                    </select>
                </div>
                <div className="field-group">
                    <label className="label">Data:</label>
                    <input type="date" className="input" ref={ node => date = node } />
                </div>
                <div className="actions">
                    <button className="btn-outlined" onClick={ () => history.push('/') }>Voltar</button>
                    <button type="submit" className="submit-btn">Salvar</button>
                </div>
            </form>
        </section>
    )
}

HourForm.propTypes = {
    history: PropTypes.object.isRequired
}

const mapStateToProps = (state, { history }) => ({ history })

const mapDispatchToProps = dispatch => ({
    onSubmit: (from, to, pause, date) => {
        return dispatch(registerWorkJourney({ date, from, to, pause }))
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HourForm))