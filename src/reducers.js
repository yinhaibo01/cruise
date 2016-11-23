/**
 * Created by BenYin on 11/21/2016.
 */



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

function infoReducer(info) {
    return info;
}

function addToResource(resources, resourcesString) {
    return resources.concat(resourcesString.split(',').map(function (res) {
        return res.trim();
    }))
}

function removeResouce(resources, index) {
    return [...resources.slice(0, index), ...resources.slice(index + 1)]
}

function removeResourceReducer(row, index) {
    return {
        info: infoReducer(row.info),
        resources: removeResouce(row.resources, index)
    }
}

function addResourceReducer(row, resourceString) {
    return {
        info: infoReducer(row.info),
        resources: addToResource(row.resources, resourceString)
    }
}

function reducer(state = initData, action) {
    var newState = {rows: []};
    switch (action.type) {
        case 'RemoveResource':
            var rowIndex = state.rows.findIndex(function (row) {
                return row.info.ip === action.ip;
            });

            newState.rows = [...state.rows.slice(0, rowIndex), removeResourceReducer(state.rows[rowIndex], action.index), ...state.rows.slice(rowIndex + 1)];
            return newState;
        case 'AddResource':
            var rowIndex = state.rows.findIndex(function (row) {
                return row.info.ip === action.ip;
            });
            newState.rows = [...state.rows.slice(0, rowIndex), addResourceReducer(state.rows[rowIndex], action.resources), ...state.rows.slice(rowIndex + 1)];
            return newState;
        default:
            return state;
    }
}

export default reducer