import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export function set(obj:any): boolean {
    let key = Object.keys(obj)[0];
    let value = obj[key]

    localStorage.setItem(key, value);
    return true;
}
/**
* @param Object {key:{object}}
* @return Callback Function
*/
export function setObject(obj:any): boolean {
    let key = Object.keys(obj)[0];
    let value = obj[key]

    localStorage.setItem(key, JSON.stringify(value));
    return true;
}

export function get(key): string {
    let result = localStorage.getItem(key);
    return result;
}

export function getObject(key): any {
    let result = localStorage.getItem(key);
    return JSON.parse(result);
}

/**
* @param Object {key:value}
* @return Callback Function
* @Deprecated
*/
export function setCallback(obj:any, callback?: Function) {
    let key = Object.keys(obj)[0];
    let value = obj[key]

    localStorage.setItem(key, value);

    if(typeof callback != 'undefined')
        callback(true);
}
/**
* @param Object {key:{object}}
* @return Callback Function
* @Deprecated
*/
export function setObjectCallback(obj:any, callback?: Function) {
    let key = Object.keys(obj)[0];
    let value = obj[key]

    localStorage.setItem(key, JSON.stringify(value));
    if(typeof callback != 'undefined')
        callback(true);
}

/**
* @Deprecated
*/
export function getCallback(key, callback: Function) {
    let result = localStorage.getItem(key);
    callback(result);
}

/**
* @Deprecated
*/
export function getObjectCallback(key, callback: Function) {
    let result = localStorage.getItem(key);
    callback(JSON.parse(result));
}
