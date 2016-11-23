/**
 * Created by BenYin on 11/22/2016.
 */
import {ADD_RESOURCE, REMOVE_RESOURCE} from './action-names'

export function removeResource(ip, index) {
    return {
        type: REMOVE_RESOURCE,
        ip,
        index
    }
}

export function addResource(ip, resources) {
    return {
        type: ADD_RESOURCE,
        ip,
        resources
    }
}