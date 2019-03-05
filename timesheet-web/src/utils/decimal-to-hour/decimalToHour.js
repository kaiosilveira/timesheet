import numberToMinute from '../number-to-minute/numberToMinute'
import padLeft from '../oad-left/padLeft';

const decimalToHour = decimal => {
    const decimalAsString = decimal.toFixed(2)
    const hours = padLeft(decimalAsString.split('.')[0])
    const minutes = padLeft(numberToMinute(parseInt(decimalAsString.split('.')[1])))
    return `${hours}:${minutes}`
}

export default decimalToHour