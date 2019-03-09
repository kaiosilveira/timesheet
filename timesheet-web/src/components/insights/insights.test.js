import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Insights } from './Insights'
import InsightsService from '../../api/services/insights.service';

Enzyme.configure({ adapter: new Adapter() })

const timesheet = [{ from: 9, to: 18, pause: 1, date: new Date(), period: '4234fe33r' }]

function setup() {
    const props = { insights: new InsightsService().createInsightCards(55, timesheet) }
    const wrapper = shallow(<Insights {...props} />) 

    return { props, wrapper }
}

describe('insights', () => {

    it('should render with props', () => {
        const { wrapper } = setup()
        expect(wrapper.find('Card').length).toEqual(4)
    })

})