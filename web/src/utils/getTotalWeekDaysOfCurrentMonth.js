import isWeekDay from './isWeekDay'

const getTotalWeekDaysOfCurrentMonth = () => {

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

export default getTotalWeekDaysOfCurrentMonth