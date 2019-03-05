import React from 'react'
import { connect } from 'react-redux'

import Card from '../_shared/card/Card'
import createInsights from '../../store/selectors'

const Insights = ({ insights }) => (
    <div className="insights-wrapper">
        {
            insights.map(card => (
                <Card key={card.id} info={card} />
            ))
        }
    </div>
)

export default connect(state => ({
    insights: createInsights(state)
}))(Insights)