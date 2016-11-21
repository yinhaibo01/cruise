/**
 * Created by BenYin on 11/21/2016.
 */

import {combineReducers} from 'redux'


function getInfo() {
    return {
        name: 'bjstdmngbgr02.thoughtworks.com',
        status: 'idle',
        ip: '192.168.1.2',
        dir: '/var/lib/cruise-agent'
    }
}

function getResources() {
    return ['Init']
}

const reducer = combineReducers({
    info: getInfo,
    resources: getResources
});

export default reducer