// 实现如下效果
// const obj1 = {
//   a: 100,
//   b: {
//     x: 100,
//     y: 200
//   }
// }
// const obj2 = {
//   a: 100,
//   b: {
//     x: 100,
//     y: 200
//   }
// }

// isEqual(obj1, obj2) === true

// 实现思路

function isObjet(obj) {
    return typeof obj  === 'object' && obj!== null
}

function isEqual(obj1, obj2) {
    if (!isObjet(obj1) ||!isObjet(obj2)) {
        return obj1 === obj2
    }
    if(obj1===obj2) {
        return true
    }
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    if (keys1.length!== keys2.length) {
        return false
    }

    for (let key in obj1) {
        const res = isEqual(obj1[key], obj2[key])
        if(!res) {
            return false
        }
    }
    return true
}
// 测试
const obj1 = {
  a: 100,
  b: {
    x: 100,
    y: 200
  }
}
const obj2 = {
  a: 100,
  b: {
    x: 100,
    y: 200
  }
}

console.log( isEqual(obj1, obj2) ) // true
const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3, 4]
console.log( isEqual(arr1, arr2) ) // false
