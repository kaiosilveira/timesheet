import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './HourForm.css'
import registerWorkDay from '../../store/actions/registerWorkDay';

class HourForm extends React.Component {
    render() {
        const { onSubmit, history } = this.props;
        let from, to, pause;

        return (
            <section onSubmit={e => {
                    e.preventDefault()
                    onSubmit(parseInt(from.value), parseInt(to.value), parseInt(pause.value))
                    history.push('/')
                }}>
                <h2>Registrar horas</h2>
                <form className="form">
                    <input className="field" type="number" ref={node => from = node} placeholder="das"/>
                    <input className="field" type="number" ref={node => to = node} placeholder="ás"/>
                    <input className="field" type="number" ref={node => pause = node} placeholder="Pausa"/>
                    <button type="submit" className="submit-btn">Salvar</button>
                </form>
            </section>
        )
    }
}

const mapStateToProps = ({ from, to, pause }) => ({ from, to, pause })

const mapDispatchToProps = dispatch => ({
    onSubmit: (from, to, pause) => {
        dispatch(registerWorkDay({ date: new Date(), from, to, pause }))
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HourForm))