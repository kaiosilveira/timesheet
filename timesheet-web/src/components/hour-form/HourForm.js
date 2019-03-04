import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './HourForm.css'
import registerWorkJourney from '../../store/actions/register-work-journey/registerWorkJourney'
import WORK_HOURS, { PAUSE_HOURS } from '../../constraints/WORK_HOURS'

class HourForm extends React.Component {
    render() {
        const { onSubmit, history } = this.props;
        let from, to, pause;

        return (
            <section>
                <h2>Registrar horas</h2>
                <form className="form" onSubmit={e => {
                    e.preventDefault()
                    onSubmit(parseInt(from.value), parseInt(to.value), parseInt(pause.value))
                    history.push('/')
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
                    <button type="submit" className="submit-btn">Salvar</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = ({ period }) => ({ period })

const mapDispatchToProps = dispatch => ({
    onSubmit: (from, to, pause) => {
        return dispatch(registerWorkJourney({ date: new Date(), from, to, pause }))
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HourForm))