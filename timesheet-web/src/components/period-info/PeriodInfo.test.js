import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PeriodInfo from './PeriodInfo'
import getTotalWeekDaysUntilTheEndOfMonth from '../../utils/get-total-weekdays-until-the-end-of-month/getTotalWeekDaysUntilTheEndOfMonth'

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
    const enzymeWrapper = shallow(<PeriodInfo />)
    return { enzymeWrapper }
}

describe('PeriodInfo', () => {

    it('should render', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('p').type).not.toBe(null)
    })

    it('should render accordingly to the weekdays available in the current month', () => {
        
        const { enzymeWrapper } = setup()
        const expectedText = `Faltam ${getTotalWeekDaysUntilTheEndOfMonth(new Date())} dias úteis para o término do período.`

        expect(enzymeWrapper.find('p').text()).toEqual(expectedText)
    })

})