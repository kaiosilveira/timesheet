import numberToMinute from '../number-to-minute/numberToMinute'
import padLeft from '../pad-left/padLeft'

const decimalToHour = decimal => {
    const decimalAsString = decimal.toFixed(2)
    const hours = padLeft(decimalAsString.split('.')[0])
    const minutesAsString = numberToMinute(parseInt(decimalAsString.split('.')[1]))
    const minutes = minutesAsString === '00' ? minutesAsString : padLeft(minutesAsString)
    return `${hours}:${minutes}`
}

export default decimalToHour