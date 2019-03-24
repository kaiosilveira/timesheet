import React from 'react'

const TimesheetBoxTasksInfo = ({ tasks }) => tasks && tasks.length ? (
    <div className="work-journey-tasks-info">
        <h3>Atividades</h3>
        <p>- Implementação da nova tela de admin</p>
        <p>- Refatoração da store</p>
        <p>- Cobertura de testes</p>
    </div>
) : null

export default TimesheetBoxTasksInfo