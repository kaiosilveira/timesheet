import React from 'react'
import getTotalWeekDaysOfCurrentMonth from '../utils/getTotalWeekDaysOfCurrentMonth'

const PeriodInfo = () => (
    <p>Faltam {getTotalWeekDaysOfCurrentMonth()} dias úteis para o térimo do período.</p>
)

export default PeriodInfo