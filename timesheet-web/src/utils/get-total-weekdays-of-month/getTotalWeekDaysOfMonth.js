import isWeekDay from '../is-weekday/isWeekDay'
import isHoliday from '../is-holiday/isHoliday'

const getTotalWeekDaysOfMonth = date => {

    const ref = date
    const nextMonth = new Date(ref.getFullYear(), ref.getMonth() + 1, 0)
    const totalDaysInCurrentMonth = nextMonth.getDate()

    let weekDays = 0;
    for (let i = 0; i < totalDaysInCurrentMonth; i++) {
        const step = new Date(ref.getFullYear(), ref.getMonth(), i);
        if (isWeekDay(step.getDay()) && !isHoliday(step)) {
            weekDays++
        }
    }

    return weekDays
}

export default getTotalWeekDaysOfMonth