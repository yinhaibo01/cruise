/**
 * Created by BenYin on 11/23/2016.
 */

import React from 'react'
import {shallow} from 'enzyme'
import Row from '../src/row'

function setup() {
    const props = {
        info: {
            name: 'bjstdmngbgr01.grapecity.com',
            status: 'idle',
            ip: '192.168.1.2',
            dir: '/var/lib/cruise-agent'
        },
        resources: ['a', 'b', 'c'],
        dispatch: jest.fn()
    }

    window.$ = require('jquery');
    const enzymeWrapper = shallow(<Row {...props} />)
    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Row', () => {
        it('should render self and subcomponents', () => {
            const {enzymeWrapper} = setup()

            expect(enzymeWrapper.prop('id')).toBe('row-element');

            let rowDoms = enzymeWrapper.childAt(1).childAt(0);
            expect(rowDoms.children().length).toBe(4);

            expect(rowDoms.childAt(0).childAt(0).text()).toBe('bjstdmngbgr01.grapecity.com')
            expect(rowDoms.childAt(1).childAt(0).text()).toBe('idle')
            expect(rowDoms.childAt(2).childAt(0).text()).toBe('192.168.1.2')
            expect(rowDoms.childAt(3).childAt(0).text()).toBe('/var/lib/cruise-agent')
        })
    })
})