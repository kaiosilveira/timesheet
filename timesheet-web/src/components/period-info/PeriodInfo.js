import React from 'react'
import getTotalWeekDaysOfCurrentMonth from '../../utils/get-total-weekdays-until-the-end-of-month/getTotalWeekDaysUntilTheEndOfMonth'

const PeriodInfo = () => (
    <p>Faltam {getTotalWeekDaysOfCurrentMonth(new Date())} dias úteis para o térimo do período.</p>
)

export default PeriodInfo