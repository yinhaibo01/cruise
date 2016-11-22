/**
 * Created by BenYin on 11/21/2016.
 */

import {combineReducers} from 'redux'


var initData = {
    rows: [
        {
            info: {
                name: 'bjstdmngbgr01.grapecity.com',
                status: 'idle',
                ip: '192.168.1.2',
                dir: '/var/lib/cruise-agent'
            },
            resources: ['a', 'b', 'c']
        },
        {
            info: {
                name: 'bjstdmngbgr02.grapecity.com',
                status: 'idle',
                ip: '192.168.1.3',
                dir: '/var/lib/cruise-agent'
            },
            resources: ['a', 'b', 'c']
        },
        {
            info: {
                name: 'bjstdmngbgr03.grapecity.com',
                status: 'idle',
                ip: '192.168.1.4',
                dir: '/var/lib/cruise-agent'
            },
            resources: ['a', 'b', 'c']
        },
        {
            info: {
                name: 'bjstdmngbgr04.grapecity.com',
                status: 'idle',
                ip: '192.168.1.5',
                dir: '/var/lib/cruise-agent'
            },
            resources: ['a', 'b', 'c']
        }
    ]
};

var index = 1;

function FormatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}


function getInfo(state = initData.info, action) {
    index++;
    return {
        name: 'bjstdmngbgr' + FormatNumberLength(index) + '.grapecity.com',
        status: 'idle',
        ip: '192.168.1.' + index,
        dir: '/var/lib/cruise-agent'
    }
}

function getResources(state = initData.resources, action) {
    switch (action.type) {
        case 'add':
            return state;
        case 'remove':
            return state;
        default:
            return state;
    }
}

const rowReducer = combineReducers({
    info: getInfo,
    resources: getResources
});


function reducer(state = initData, action) {
    return state;
}

export default reducer