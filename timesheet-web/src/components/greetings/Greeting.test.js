import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Greeting } from './Greeting'

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
    const props = { name: 'Kaio Silveira' }
    const wrapper = shallow(<Greeting {...props} />)
    
    return { props, wrapper }
}

describe('Greeting', () => {

    it('should render', () => {
        const { wrapper } = setup()
        expect(wrapper.find('h1')).toBeTruthy()
    })

    it('should render with props', () => {
        const { wrapper, props } = setup()
        expect(wrapper.find('h1').text()).toEqual(`Olá, ${props.name}`)
    })

})

