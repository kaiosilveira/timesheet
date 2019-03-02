import React from 'react'

const Card = ({ info }) => (
    <div className={`card ${info.className || ''}`}>
        {
            info.items.map(i => (
                <span key={i.text} className={(i.highlight ? 'highlight' : '')}>{i.text}</span>
            ))
        }
    </div>
)

export default Card