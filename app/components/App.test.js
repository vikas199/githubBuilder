import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('<App />', ()=>{
    it('renders 1 <app /> component', () => {
        const component = shallow(<App />);
        expect(component).toHaveLength(1);
    } )
})
