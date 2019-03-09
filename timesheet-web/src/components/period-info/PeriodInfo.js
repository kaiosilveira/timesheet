import React from 'react'
import getTotalWeekDaysUntilTheEndOfMonth from '../../utils/get-total-weekdays-until-the-end-of-month/getTotalWeekDaysUntilTheEndOfMonth'

const PeriodInfo = () => (
    <p>Faltam {getTotalWeekDaysUntilTheEndOfMonth(new Date())} dias úteis para o término do período.</p>
)

export default PeriodInfo