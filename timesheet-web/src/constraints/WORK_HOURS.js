import decimalToHour from '../utils/decimalToHour'

class WorkHour {
    constructor(value, label) {
        this.value = value;
        this.label = label;
    }
}

const createWorkHours = (from, to, step) => {
    const arr = [];
    for (let i = from; i < to; i += step) {
        arr.push(new WorkHour(i, decimalToHour(i)))
    }
    return arr
}

const WORK_HOURS = createWorkHours(8, 22, .25)
export const PAUSE_HOURS = createWorkHours(0, 2.25, .25)

export default WORK_HOURS