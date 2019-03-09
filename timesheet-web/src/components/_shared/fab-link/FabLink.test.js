import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FabLink from './FabLink';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = { path: '/add', icon: 'plus' }
    const enzymeWrapper = shallow(<FabLink {...props} />)
    return { props, enzymeWrapper }
}

describe('fab-link', () => {

    it('should render', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('NavLink').find('span').hasClass('text')).toBe(true)
    })

    it('should receive props', () => {
        const { enzymeWrapper, props } = setup()
        const componentProps = enzymeWrapper.props()
        expect(componentProps.to).toEqual(props.path)
        expect(enzymeWrapper.find(`FontAwesomeIcon`).props().icon).toEqual(props.icon)
    })

})