import isWeekDay from '../../utils/is-weekday/isWeekDay'
import getTotalWeekDaysOfMonth from '../../utils/get-total-weekdays-of-month/getTotalWeekDaysOfMonth'
import getTotalWeekDaysUntilTheEndOfMonth from '../../utils/get-total-weekdays-until-the-end-of-month/getTotalWeekDaysUntilTheEndOfMonth'

class InsightsService {

    constructor(ignoreSaturdaysOnAvg) {
        this.ignoreSaturdaysOnAvg = ignoreSaturdaysOnAvg
    }

    buildCurrentEarningsCard = (hourValue, timesheet) => {
        return {
            id: 1,
            className: 'text-green',
            items: [
                {
                    text: `${this.getCurrentEarnings(hourValue, timesheet).toFixed(2)}`,
                    highlight: true
                },
                {
                    text: 'faturados esse mês',
                    highlight: false
                }
            ]
        }
    }

    getCurrentEarnings = (hourValue, timesheet) => {
        return (
            hourValue * timesheet
            .map(i => i.to - i.from - i.pause)
            .reduce((sum, i) => sum += i, 0)
        )
    }

    buildForecastCard = (hourValue, timesheet) => {

        const weekDaysUntilTheEndOfMonth = getTotalWeekDaysUntilTheEndOfMonth(new Date())
        const averageWorkHours = this.getAverageWorkHoursPerDay(timesheet, this.ignoreSaturdaysOnAvg) || 8
        const currentEarnings = this.getCurrentEarnings(hourValue, timesheet)

        console.log(currentEarnings, averageWorkHours, weekDaysUntilTheEndOfMonth)
        
        return {
            id: 2,
            className: 'green',
            items: [
                {
                    text: 'A previsão para esse mês é de',
                    highlight: false
                },
                {
                    text: `${(currentEarnings + (hourValue * weekDaysUntilTheEndOfMonth * averageWorkHours)).toFixed(2)}`,
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
                    text: `${(this.getAverageWorkHoursPerDay(timesheet, this.ignoreSaturdaysOnAvg)).toFixed(2)}`,
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
                    text: `${workedHours === 0 ? 100 : ((100 - (workedHours / 176 * 100))).toFixed(2)}%`,
                    highlight: true
                },
                {
                    text: 'para atingir sua meta de horas',
                    highlight: false
                },
            ]
        }
    }

    getAverageWorkHoursPerDay = (timesheet, ignoreSaturdaysOnAvg) => {

        const filtered = ignoreSaturdaysOnAvg ? timesheet.filter(i => isWeekDay(new Date(i.date).getUTCDay())) : timesheet

        return (filtered.map(day => day.to - day.from - day.pause).reduce((sum, i) => sum += i, 0) || 0) / (filtered.length || 1)
    }

    createInsightCards = (hourValue, timesheet) => [
        this.buildCurrentEarningsCard(hourValue, timesheet),
        this.buildForecastCard(hourValue, timesheet),
        this.buildAverageWorkJourneyCard(timesheet),
        this.buildHoursGoalCard(timesheet)
    ]
}

export default InsightsService