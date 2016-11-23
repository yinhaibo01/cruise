/**
 * Created by BenYin on 11/23/2016.
 */
import React from 'react'
import {shallow} from 'enzyme'
import Resources from '../src/resources'

function setup() {
    const props = {
        addResource: jest.fn(),
        removeResource: jest.fn(),
        resources: ['a', 'b', 'c']
    }

    window.$ = require('jquery');
    const enzymeWrapper = shallow(<Resources {...props} />)
    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Resources', () => {
        it('should render self and subcomponents', () => {
            const {enzymeWrapper} = setup()

            expect(enzymeWrapper.childAt(1).text()).toBe('Resources:');

            let resourcesDoms = enzymeWrapper.childAt(2);
            expect(resourcesDoms.children().length).toBe(3);

            expect(resourcesDoms.childAt(0).childAt(0).childAt(0).text()).toBe('a')
            expect(resourcesDoms.childAt(1).childAt(0).childAt(0).text()).toBe('b')
            expect(resourcesDoms.childAt(2).childAt(0).childAt(0).text()).toBe('c')
        })
    })
})