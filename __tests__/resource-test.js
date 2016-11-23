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

            expect(enzymeWrapper.childAt(1).text()).toBe('Resources:')

        })

        // it('should call addTodo if length of text is greater than 0', () => {
        //     const { enzymeWrapper, props } = setup()
        //     const input = enzymeWrapper.find('TodoTextInput')
        //     input.props().onSave('')
        //     expect(props.addTodo.mock.calls.length).toBe(0)
        //     input.props().onSave('Use Redux')
        //     expect(props.addTodo.mock.calls.length).toBe(1)
        // })
    })
})