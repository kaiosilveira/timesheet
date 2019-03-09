import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DateInfo from './DateInfo'
import DAYS_OF_WEEK from '../../constraints/DAYS_OF_WEEK';
import MONTHS from '../../constraints/MONTHS';

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
    const wrapper = shallow(<DateInfo />)
    return { wrapper }
}

describe('DateInfo', () => {

    it('should render', () => {
        const { wrapper } = setup()
        expect(wrapper.find('p')).toBeTruthy()
    })

    it('should display current date', () => {
        const { wrapper } = setup()
        const d = new Date()
        const expectedText = `${DAYS_OF_WEEK[d.getDay()]}, ${d.getDate()} de ${MONTHS[d.getMonth()].name} de ${d.getFullYear()}`

        expect(wrapper.find('p').text()).toEqual(expectedText)
    })
})