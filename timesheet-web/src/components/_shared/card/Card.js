import React from 'react'
import './Card.scss'

const Card = ({ info }) => (
    <div className="card">
        {
            info.items.map(i => (
                <span key={i.text} className={(i.highlight ? 'highlight' : '')}>{i.text}</span>
            ))
        }
    </div>
)

export default Card