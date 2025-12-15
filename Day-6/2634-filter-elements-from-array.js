let filter = function (arr, fn) {
    let a = arr.length;
    let filteredArr = [];

    for (let i = 0; i < a; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
};