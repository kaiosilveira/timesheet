import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dashboard from './Dashboard'

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
    const wrapper = shallow(<Dashboard />)
    return { wrapper }
}

describe('Dashboard', () => {

    it('should render', () => {
        const { wrapper } = setup()
        expect(wrapper.find('section')).toBeTruthy()
        expect(wrapper.find('section').find('PeriodInfo')).toBeTruthy()
        expect(wrapper.find('section').find('Insights')).toBeTruthy()
    })

})