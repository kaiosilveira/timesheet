import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
    const wrapper = shallow(<App />)
    return { wrapper }
}

describe('App', () => {
    
    it('should render', () => {
        const { wrapper } = setup()
        expect(wrapper.find('div').hasClass('App')).toBe(true)
    })

})