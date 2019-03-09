
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Card from './Card'

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
    
    const props = {
        info: {
            items: [{
                text: 'ble',
                highlight: false
            },
            {
                text: 'blu',
                highlight: true
            }]
        }
    }

    const enzymeWrapper = shallow(<Card {...props} />)

    return { props, enzymeWrapper }
}

describe('Card', () => {

    it('should render with props', () => {

        const { enzymeWrapper, props } = setup()
        const matches = enzymeWrapper.find('span')
        
        expect(matches.length).toBe(2)
        
        matches.forEach(match => {
            const matchExpectedText = props.info.items.find(i => match.key() === i.text)
            expect(match.text()).toEqual(matchExpectedText.text)
        })

    })

    it('should highlight a text', () => {
        const { enzymeWrapper, props } = setup()
        const receivedText = enzymeWrapper.find('.highlight').text()
        const expectedText = props.info.items.find(i => i.highlight).text
        expect(receivedText).toEqual(expectedText)
    })

})