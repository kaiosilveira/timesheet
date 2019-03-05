const numberToMinute = decimal => {
    switch(decimal) {
        case 0:
        default:
            return '00'
        case 25:
            return '15'
        case 50:
            return '30'
        case 75:
            return '45'
    }
}

export default numberToMinute