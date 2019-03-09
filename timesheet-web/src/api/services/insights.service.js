import getTotalWeekDaysOfMonth from '../../utils/get-total-weekdays-of-month/getTotalWeekDaysOfMonth'

class InsightsService {

    buildCurrentEarningsCard = (hourValue, timesheet) => {
        return {
            id: 1,
            className: 'text-green',
            items: [
                {
                    text: `${(hourValue * timesheet.map(i => i.to - i.from - i.pause).reduce((sum, i) => sum += i, 0)).toFixed(2)}`,
                    highlight: true
                },
                {
                    text: 'faturados esse mês',
                    highlight: false
                }
            ]
        }
    }

    buildForecastCard = (hourValue, timesheet) => {

        const totalDaysOfCurrentMonth = getTotalWeekDaysOfMonth(new Date())
        const averageWorkHours = this.getAverageWorkHoursPerDay(timesheet) || 8

        return {
            id: 2,
            className: 'green',
            items: [
                {
                    text: 'A previsão para esse mês é de',
                    highlight: false
                },
                {
                    text: `${(hourValue * totalDaysOfCurrentMonth * averageWorkHours).toFixed(2)}`,
                    highlight: true
                }
            ]
        }
    }

    buildAverageWorkJourneyCard = timesheet => {
        return {
            id: 3,
            items: [
                {
                    text: 'Você trabalha em média',
                    highlight: false
                },
                {
                    text: `${(this.getAverageWorkHoursPerDay(timesheet)).toFixed(2)}`,
                    highlight: true
                },
                {
                    text: 'por dia',
                    highlight: false
                },
            ]
        }

    }

    buildHoursGoalCard = timesheet => {
        const workedHours = timesheet.map(i => i.to - i.from - i.pause).reduce((sum, i) => sum += i, 0)
        return {
            id: 4,
            items: [
                {
                    text: 'Faltam',
                    highlight: false
                },
                {
                    text: `${workedHours === 0 ? 100 : ((workedHours - 176 / 176) * 100)}%`,
                    highlight: true
                },
                {
                    text: 'para atingir sua meta de horas',
                    highlight: false
                },
            ]
        }
    }

    getAverageWorkHoursPerDay = timesheet => (timesheet.map(day => day.to - day.from - day.pause).reduce((sum, i) => sum += i, 0) || 0) / (timesheet.length || 1)

    createInsightCards = (hourValue, timesheet) => [
        this.buildCurrentEarningsCard(hourValue, timesheet),
        this.buildForecastCard(hourValue, timesheet),
        this.buildAverageWorkJourneyCard(timesheet),
        this.buildHoursGoalCard(timesheet)
    ]
}

export default InsightsService