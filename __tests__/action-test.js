/**
 * Created by BenYin on 11/23/2016.
 */
import {addResource, removeResource} from '../src/action/actions'
import {ADD_RESOURCE, REMOVE_RESOURCE} from '../src/common/action-names'

describe('actions', () => {
    it('should create an action to add one resource', () => {
        const expectedAction = {
            type: ADD_RESOURCE,
            ip: '192.168.1.2',
            resources: 'test'
        };
        expect(addResource('192.168.1.2', 'test')).toEqual(expectedAction)
    })
    it('should create an action to remove one resource', () => {
        const expectedAction = {
            type: REMOVE_RESOURCE,
            ip: '192.168.1.2',
            index: 1
        };
        expect(removeResource('192.168.1.2', 1)).toEqual(expectedAction)
    })
})
