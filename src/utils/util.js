import enquireJs from 'enquire.js'
/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime (time, cFormat) {
    if (arguments.length === 0 || !time) {
        return null;
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
    let date;
    if (typeof time === 'object') {
        date = time;
    } else {
        if ((typeof time === 'string')) {
            if ((/^[0-9]+$/.test(time))) {
                time = parseInt(time);
            } else {
                time = time.replace(new RegExp(/-/gm), '/');
            }
        }
        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000;
        }
        date = new Date(time);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        w: date.getDay()
    }
    const time_str = format.replace(/{([ymdhisw])+}/g, (result, key) => {
        const value = formatObj[key]
        if (key === 'w') {
            return ['日', '一', '二', '三', '四', '五', '六'][value];
        }
        return value.toString().padStart(2, '0');
    })
    return time_str;
}


export function isDef (v) {
    return v !== undefined && v !== null
}
/**
 * Remove an item from an array.
 */
export function remove (arr, item) {
    if (arr.length) {
        const index = arr.indexOf(item)
        if (index > -1) {
            return arr.splice(index, 1)
        }
    }
}
export function isRegExp (v) {
    return _toString.call(v) === '[object RegExp]'
}
export function enquireScreen (call) {
    const handler = {
        match: function () {
            call && call(true)
        },
        unmatch: function () {
            call && call(false)
        }
    }
    enquireJs.register('only screen and (max-width: 767.99px)', handler)
}
const _toString = Object.prototype.toString