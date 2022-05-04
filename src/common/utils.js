// 防抖
export function debounce(fn, delay) {
    let timer = null;
    return function(...arg) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, arg);
        }, delay)
    }
}


// 时间格式转换
export const dayjs = require('dayjs')