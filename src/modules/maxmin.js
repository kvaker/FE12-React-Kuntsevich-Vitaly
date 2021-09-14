"use strict"
function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    let i = arr.length;

    while (i--) {
        min = arr[i] < min ? arr[i] : min;
        max = arr[i] > max ? arr[i] : max;
    }
    return [min, max];
}
console.log(minMax([-4, 254, 698, 1200, 3000, -6, -354]));