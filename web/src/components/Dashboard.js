import React from 'react'
import Insights from './Insights'
import PeriodInfo from './PeriodInfo'

const Dashboard = ({ insights }) => (
    <section>
        <PeriodInfo />
        <Insights insights={insights} />
    </section>
)

export default Dashboard