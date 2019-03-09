import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ErrorMsg from './ErrorMsg'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = { text: 'Falha ao conectar', visible: true }
    const enzymeWrapper = shallow(<ErrorMsg {...props} />)
    return { props, enzymeWrapper }
}

describe('ErrorMsg', () => {
    
    it('should render if visible', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('span')).toBeTruthy() 
    })

    it('should not render if not visible', () => {
        const props = { text: 'Falha ao conectar', visible: false }
        const enzymeWrapper = shallow(<ErrorMsg {...props} />)
        expect(enzymeWrapper.type()).toBe(null)
    })

    it('should receive props', () => {
        const { enzymeWrapper, props } = setup()
        expect(enzymeWrapper.find('span').text()).toEqual(props.text)
    })

})