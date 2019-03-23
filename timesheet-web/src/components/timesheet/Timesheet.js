import React from 'react'
import { connect } from 'react-redux'
import { getShortenedMonthName } from '../../constraints/MONTHS'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import editWorkJourney from '../../store/actions/edit-work-journey/editWorkJourney';

import './Timesheet.scss'

const Timesheet = ({ timesheet, currentPeriod, editWorkJourney }) => (
    <section>
        <h2 className="list-title">Lançamentos - {currentPeriod.name} </h2>
        <div>
            {
                timesheet.map(workJourney => (
                    <div key={workJourney._id} className="timesheet-box">
                        <div className="date-info">
                            <span>{new Date(workJourney.date).getDate()}/</span>
                            <span>{getShortenedMonthName(new Date(workJourney.date).getMonth())}</span>
                        </div>
                        <div className="work-journey-info">
                            <span>Início: {workJourney.from}</span>
                            <span>Término: {workJourney.to}</span>
                            <span>Pausa: {workJourney.pause}</span>
                            <span>Total: {workJourney.to - workJourney.from - workJourney.pause}</span>
                        </div>
                        <div className="actions">
                            <button className="btn" onClick={editWorkJourney}>
                                <span>
                                    <FontAwesomeIcon icon="edit" />
                                </span>
                            </button>
                            <button className="btn is-danger">
                                <span>
                                    <FontAwesomeIcon icon="trash-alt" />
                                </span>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = ({ timesheet, currentPeriod }) => ({ timesheet, currentPeriod })

const mapDispatchToProps = ({ dispatch }) => ({
    edit: workJourney => dispatch(editWorkJourney(workJourney))
})

export default connect(mapStateToProps, mapDispatchToProps)(Timesheet)