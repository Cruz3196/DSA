/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let i = 0;
    let result = [];
    while(i < arr.length){
        if(fn(arr[i], i)){
            result.push(arr[i])
        }
        i++;
    }
    return result
};