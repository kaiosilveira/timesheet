import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Title from './Title'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    
    const props = { text: 'ble' }
    const enzymeWrapper = shallow(<Title {...props} />)

    return { props, enzymeWrapper }
}

describe('Title', () => {

    it('should render', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('h1')).toBeTruthy()
    })
  
    it('should has class title', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('h1').hasClass('title')).toBe(true)
    })

    it('should receive props', () => {
        const { enzymeWrapper, props } = setup()
        expect(enzymeWrapper.find('h1').text()).toBe(props.text)
    })

})