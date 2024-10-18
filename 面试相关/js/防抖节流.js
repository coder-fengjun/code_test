function debounce(fn, delay = 500) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;
        }, delay);
    }
}

function throttle(fn, delay = 500) {
    let timer = null;
    return function () {
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;
        }, delay);
    }
}

const code = [
    [1, 9, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 28, 34, 38, 40, 42, 44, 48, 50, 52, 54],
    [2, 8, 12, 22, 29, 35, 39, 45, 58],
    [3, 7, 12, 13, 14, 15, 16, 18, 25, 31, 33, 41, 43, 45, 52],
    [4, 6, 20, 22, 29, 35, 39, 45, 58],
    [5, 5, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 29, 35, 39, 52, 54, 56, 58],
];
function crazyKfc(arr) {
    let str = "";
    for (let i = 0, len = arr.length; i < len; i++) {
        for (let j = 0, len1 = 60; j < len1; j++) {
            if (arr[i].indexOf(j) > -1) {
                str += "█";
            } else {
                str += " ";
            }
        }
        str += "\n";
    }
    return str;
}
console.log(crazyKfc(code));