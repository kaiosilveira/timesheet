import HOLYDAYS from '../constraints/HOLIDAYS'

const isHolyday = date => HOLYDAYS.some(hd => date.getFullYear() === hd.year
    && date.getMonth() === hd.month 
    && date.getDate() === hd.day
)

export default isHolyday