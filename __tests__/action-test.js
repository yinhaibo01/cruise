/**
 * Created by BenYin on 11/23/2016.
 */
import {addResource, removeResource} from '../src/actions.js'


describe('actions', () => {
    it('should create an action to add one resource', () => {
        const expectedAction = {
            type: 'AddResource',
            ip: '192.168.1.2',
            resources: 'test'
        };
        expect(addResource('192.168.1.2', 'test')).toEqual(expectedAction)
    })
    it('should create an action to remove one resource', () => {
        const expectedAction = {
            type: 'RemoveResource',
            ip: '192.168.1.2',
            index: 1
        };
        expect(removeResource('192.168.1.2', 1)).toEqual(expectedAction)
    })
})
