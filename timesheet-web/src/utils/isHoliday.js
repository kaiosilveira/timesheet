import HOLYDAYS from '../constraints/HOLIDAYS'

const isHoliday = date => HOLYDAYS.some(hd => date.getFullYear() === hd.year
    && date.getMonth() === hd.month 
    && date.getDate() === hd.day
)

export default isHoliday