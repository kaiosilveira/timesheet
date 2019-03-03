import React from 'react'
import Insights from '../insights/Insights'
import PeriodInfo from '../period-info/PeriodInfo'

const Dashboard = ({ insights }) => (
    <section>
        <PeriodInfo />
        <Insights insights={insights} />
    </section>
)

export default Dashboard