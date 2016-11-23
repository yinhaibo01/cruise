/**
 * Created by BenYin on 11/22/2016.
 */
export function removeResource(ip, index) {
    return {
        type: 'RemoveResource',
        ip,
        index
    }
}

export function addResource(ip, resources) {
    return {
        type: 'AddResource',
        ip,
        resources
    }
}