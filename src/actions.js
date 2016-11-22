/**
 * Created by BenYin on 11/22/2016.
 */
export function removeResouce(ip, resource) {
    return {
        type: 'RemoveResouce',
        ip,
        resource
    }
}