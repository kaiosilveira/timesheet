import numberToMinute from './numberToMinute'

const decimalToHour = decimal => {
    const decimalAsString = decimal.toFixed(2)
    const hours = decimalAsString.split('.')[0]
    const minutes = numberToMinute(parseInt(decimalAsString.split('.')[1]))
    return `${hours}:${minutes}`
}

export default decimalToHour