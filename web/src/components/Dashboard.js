import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import isWeekDay from '../utils/isWeekDay'

class Dashboard extends React.Component {

    render() {
        if (this.props.user) {
            return (
                <section>
                    <p>Faltam {this.getTotalWeekDaysOfCurrentMonth()} dias úteis para o térimo do período.</p>

                    {
                        this.createInsightCards().map(card => (
                            <Card key={card.id} info={card} />
                        ))
                    }

                </section>
            )
        } else {
            return (
                <p>Carregando dados...</p>
            )
        }
    }

    getTotalWeekDaysOfCurrentMonth = () => {

        const ref = new Date();
        const nextMonth = new Date(ref.getFullYear(), ref.getMonth() + 1, 0);
        const totalDaysInCurrentMonth = nextMonth.getDate();

        let weekDays = 0;
        for (let i = ref.getDate(); i < totalDaysInCurrentMonth; i++) {
            const step = new Date(ref.getFullYear(), ref.getMonth(), i);
            if (isWeekDay(step.getDay())) {
                weekDays++;
            }
        }

        return weekDays;
    }

    buildCurrentEarningsCard = () => {
        return {
            id: Math.floor(Math.random() * 1000),
            className: 'text-green',
            items: [
                {
                    text: this.props.user.hourValue * this.props.user.timesheet.map(i => i.to - i.from - i.pause).reduce((sum, i) => sum += i, 0),
                    highlight: true
                },
                {
                    text: 'faturados esse mês',
                    highlight: false
                }
            ]
        }
    }

    buildForecastCard = () => {
        return {
            id: Math.floor(Math.random() * 1000),
            className: 'green',
            items: [
                {
                    text: 'A previsão para esse mês é de',
                    highlight: false
                },
                {
                    text: `${this.props.user.hourValue * this.getTotalWeekDaysOfCurrentMonth()* 8}`,
                    highlight: true
                }
            ]
        }
    }
    
    buildAverageWorkJourney = () => {
        return {
            id: Math.floor(Math.random() * 1000),
            items: [
                {
                    text: 'Você trabalha em média',
                    highlight: false
                },
                {
                    text: `${(this.props.user.timesheet.map(day => day.to - day.from - day.pause).reduce((sum, i) => sum += i, 0) || 0) / (this.props.user.timesheet.length || 1)}`,
                    highlight: true
                },
                {
                    text: 'por dia',
                    highlight: false
                },
            ]
        }
    }

    createInsightCards = () => {
        return [
            this.buildCurrentEarningsCard(),
            this.buildForecastCard(),
            this.buildAverageWorkJourney()
        ]
    }
}

export default connect(
    state => ({
        user: state.user
    })
)(Dashboard)