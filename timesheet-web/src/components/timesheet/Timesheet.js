import React from 'react'
import { connect } from 'react-redux'
import MONTHS from '../../constraints/MONTHS'
import decimalToHour from '../../utils/decimal-to-hour/decimalToHour'

import './Timesheet.scss'

const Timesheet = ({ timesheet, currentPeriod }) => {

    return (
        <section>
            <h2 className="list-title">Lançamentos - {currentPeriod.name} </h2>
            <div>
                {
                    timesheet.map(workJourney => {
                        const date = new Date(workJourney.date)

                        return (
                            <div className="timesheet-box">
                                <div key={workJourney._id} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderLeft: '5px solid #7edff6'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '.5em',
                                        boxSizing: 'border-box',
                                        fontSize: '18px',
                                        borderBottom: '1px solid #ddd'
                                    }}>
                                        <span style={{
                                            fontWeight: 'bold'
                                        }}>
                                            {date.getUTCDate()} de {MONTHS[date.getUTCMonth()].name}, &ensp;
                                        </span>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}>
                                            <span style={{
                                                fontWeight: 'bold'
                                            }}>
                                            {decimalToHour(workJourney.to - workJourney.from - workJourney.pause)} trabalhadas
                                            </span>
                                        </div>
                                    </div>
                                    <div className="work-journey-tasks-info">
                                        <h3>Atividades</h3>
                                        <p>- Implementação da nova tela de admin</p>
                                        <p>- Refatoração da store</p>
                                        <p>- Cobertura de testes</p>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}>
                                        <span className="hour-badge start">
                                            das {decimalToHour(workJourney.from)}
                                        </span>
                                        <span className="hour-badge end">
                                            ás {decimalToHour(workJourney.to)}
                                        </span>
                                        <span className="hour-badge pause">
                                            pausa {decimalToHour(workJourney.pause)}
                                        </span>
                                    </div>

                                </div>        
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

const mapStateToProps = ({ timesheet, currentPeriod }) => ({ timesheet, currentPeriod })

export default connect(mapStateToProps)(Timesheet)