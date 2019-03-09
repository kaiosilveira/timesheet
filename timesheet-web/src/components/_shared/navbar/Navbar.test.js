import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Navbar from './Navbar'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = { title: 'timesheet' }
    const enzymeWrapper = shallow(< Navbar {...props} />)
    return { props, enzymeWrapper }
}

describe('Navbar', () => {

    it('should render', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('div').hasClass('navbar')).toBe(true)
    })

    it('should receive a title', () => {
        const { enzymeWrapper, props } = setup()
        expect(enzymeWrapper.find('.navbar-title').text()).toEqual(props.title)
    })

})