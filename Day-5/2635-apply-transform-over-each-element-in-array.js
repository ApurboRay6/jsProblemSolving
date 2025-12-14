let map = function (arr, fn) {
    let a = arr.length;
    let res = new Array(a);
    for (let i = 0; i < a; i++) {
        res[i] = fn(arr[i], i);
    }
    return res;
}