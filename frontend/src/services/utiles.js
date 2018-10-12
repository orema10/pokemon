export default {
    swapInArray
}

function swapInArray(arr, item1, item2) {
    var idx1 = arr.findIndex(item => item.name === item1.name)
    var idx2 = arr.findIndex(item => item.name === item2.name)
    if (arr.length === 1) return arr;
    arr.splice(idx2, 1, arr.splice(idx1, 1, arr[idx2])[0]);
    return arr;
};