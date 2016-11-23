/**
 * Created by BenYin on 11/23/2016.
 */
import reducer from '../src/reducers'
import {ADD_RESOURCE, REMOVE_RESOURCE} from '../src/action-names'


describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual({
            rows: [
                {
                    info: {
                        name: 'bjstdmngbgr01.grapecity.com',
                        status: 'idle',
                        ip: '192.168.1.2',
                        dir: '/var/lib/cruise-agent'
                    },
                    resources: ['ubuntu', 'firefox3', 'core-duo']
                },
                {
                    info: {
                        name: 'bjstdmngbgr02.grapecity.com',
                        status: 'idle',
                        ip: '192.168.1.3',
                        dir: '/var/lib/cruise-agent'
                    },
                    resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo']
                },
                {
                    info: {
                        name: 'bjstdmngbgr03.grapecity.com',
                        status: 'idle',
                        ip: '192.168.1.4',
                        dir: '/var/lib/cruise-agent'
                    },
                    resources: ['ubuntu', 'firefox3', 'mysql', 'core-duo']
                },
                {
                    info: {
                        name: 'bjstdmngbgr04.grapecity.com',
                        status: 'idle',
                        ip: '192.168.1.5',
                        dir: '/var/lib/cruise-agent'
                    },
                    resources: []
                }
            ]
        })
    })

    it('should handle AddResource', () => {
        expect(
            reducer({
                rows: [{
                    info: {
                        name: 'bjstdmngbgr01.grapecity.com',
                        status: 'idle',
                        ip: '192.168.1.2',
                        dir: '/var/lib/cruise-agent'
                    },
                    resources: ['a', 'b', 'c']
                }]
            }, {
                type: ADD_RESOURCE,
                ip: '192.168.1.2',
                resources: 'cc'
            })
        ).toEqual({
            rows: [{
                info: {
                    name: 'bjstdmngbgr01.grapecity.com',
                    status: 'idle',
                    ip: '192.168.1.2',
                    dir: '/var/lib/cruise-agent'
                },
                resources: ['a', 'b', 'c', 'cc']
            }]
        })

        expect(
            reducer({
                rows: [{
                    info: {
                        name: 'bjstdmngbgr01.grapecity.com',
                        status: 'idle',
                        ip: '192.168.1.2',
                        dir: '/var/lib/cruise-agent'
                    },
                    resources: ['a', 'b', 'c']
                }]
            }, {
                type: ADD_RESOURCE,
                ip: '192.168.1.2',
                resources: 'd,e, f, a'
            })
        ).toEqual({
            rows: [{
                info: {
                    name: 'bjstdmngbgr01.grapecity.com',
                    status: 'idle',
                    ip: '192.168.1.2',
                    dir: '/var/lib/cruise-agent'
                },
                resources: ['a', 'b', 'c', 'd', 'e', 'f', 'a']
            }]
        })
    })

    it('should handle RemoveResource', () => {
        expect(
            reducer({
                rows: [{
                    info: {
                        name: 'bjstdmngbgr01.grapecity.com',
                        status: 'idle',
                        ip: '192.168.1.2',
                        dir: '/var/lib/cruise-agent'
                    },
                    resources: ['a', 'b', 'c']
                }]
            }, {
                type: REMOVE_RESOURCE,
                ip: '192.168.1.2',
                index: 1
            })
        ).toEqual({
            rows: [{
                info: {
                    name: 'bjstdmngbgr01.grapecity.com',
                    status: 'idle',
                    ip: '192.168.1.2',
                    dir: '/var/lib/cruise-agent'
                },
                resources: ['a', 'c']
            }]
        })

        expect(
            reducer({
                rows: [{
                    info: {
                        name: 'bjstdmngbgr01.grapecity.com',
                        status: 'idle',
                        ip: '192.168.1.2',
                        dir: '/var/lib/cruise-agent'
                    },
                    resources: ['a', 'b', 'c']
                }]
            }, {
                type: REMOVE_RESOURCE,
                ip: '192.168.1.2',
                index: 2
            })
        ).toEqual({
            rows: [{
                info: {
                    name: 'bjstdmngbgr01.grapecity.com',
                    status: 'idle',
                    ip: '192.168.1.2',
                    dir: '/var/lib/cruise-agent'
                },
                resources: ['a', 'b']
            }]
        })
    })
})