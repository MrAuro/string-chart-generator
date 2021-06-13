#!/usr/bin/env node

// chartBar([2,2,6])

function percentArr(arr) {
    return arr.map((val) => val / arr.reduce((a, b) => a + b));
}

function percentArrStr(arr) {
    return percentArr(arr).map((val) => {
        let _str = '';
        for (let i = 0; i < val * 10; i++) {
            _str += '▓';
        }
        return _str;
    });
}

function percentArrStrPadded(arr) {
    return percentArr(arr).map((val) => {
        let _str = '';
        for (let i = 0; i < val * 10; i++) {
            _str += '▓';
        }
        return _str.padEnd(10, '▒');
    });
}

module.exports = { percentArr, percentArrStr, percentArrStrPadded };
