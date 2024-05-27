var sortBy = function(arr, fn) {
    
    if (arr.length <= 1) return arr

    let left = [];
    let right = [];
    let center = arr[arr.length - 1]
    let pivot = fn(center);

    for (let i = 0; i < arr.length - 1; i++) {
        if (fn(arr[i]) < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...sortBy(left, fn), center, ...sortBy(right, fn)]
}

let step = 1
let array = [];
let func = () => {};
switch (step) {
    case 1:
        array = [5,4,1,2,3];
        func = (x) => x;
        break;
    case 2:
        array = [{"x": 1}, {"x": 0}, {"x": -1}];
        func = (d) => d.x;
        break;
    case 3:
        array = [[3,4],[5,2],[10,1]];
        func = (x) => x[1];
        break;
    default:
        break;
}

sortBy(array, func)
console.log('sortBy(array, func): ', sortBy(array, func));