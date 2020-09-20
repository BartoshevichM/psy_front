'use strict'

const toFixed = (num, count) => {
    num = num.toString()
    console.log(num)
    const reg = new RegExp(`\\d+\\.\\d{${count}}`)
    return num.match(reg)[0]
}

const a = 1.255456

console.log(toFixed(a, 2))