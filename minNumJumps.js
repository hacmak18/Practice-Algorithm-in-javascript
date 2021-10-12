let arr = [1, 4, 3, 2, 6, 2,9];

let count = 0;
function recursionMin(i=0) {
    if (arr[i] <= 0 && i < arr.length - 1) {
        count = -1;
    } else if (i < arr.length - 1) {
        count++;
        recursionMin(i + arr[i]);
    }
    return count;
}

let res = recursionMin();
console.log(res);