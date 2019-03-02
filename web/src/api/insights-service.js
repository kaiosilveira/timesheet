import getTotalWeekDaysOfCurrentMonth from '../utils/getTotalWeekDaysOfCurrentMonth';

class InsightsService {

    buildCurrentEarningsCard = (hourValue, timesheet) => {
        return {
            id: Math.floor(Math.random() * 1000),
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

        const totalDaysOfCurrentMonth = getTotalWeekDaysOfCurrentMonth()
        const averageWorkHours = this.getAverageWorkHoursPerDay(timesheet) || 8

        return {
            id: Math.floor(Math.random() * 1000),
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

    buildAverageWorkJourney = timesheet => {
        return {
            id: Math.floor(Math.random() * 1000),
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

    getAverageWorkHoursPerDay = timesheet => (timesheet.map(day => day.to - day.from - day.pause).reduce((sum, i) => sum += i, 0) || 0) / (timesheet.length || 1)

    createInsightCards = (hourValue, timesheet) => [
        this.buildCurrentEarningsCard(hourValue, timesheet),
        this.buildForecastCard(hourValue, timesheet),
        this.buildAverageWorkJourney(timesheet)
    ]
}

export default InsightsService