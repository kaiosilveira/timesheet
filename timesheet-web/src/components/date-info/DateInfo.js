import React from 'react'
import DAYS_OF_WEEK from '../../constraints/DAYS_OF_WEEK'
import MONTHS from '../../constraints/MONTHS'

const DateInfo = () => {
    const d = new Date()
    return (
        <p>{`${DAYS_OF_WEEK[d.getDay()]}, ${d.getDate()} de ${MONTHS[d.getMonth()].name} de ${d.getFullYear()}`}</p>
    )
}

export default DateInfo