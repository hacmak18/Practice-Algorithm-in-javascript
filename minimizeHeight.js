let arr = [3, 9, 12, 16, 20];
let k = 3;

function minimizeHeight(arr, k, n) {
    arr.sort((a, b) => a - b);
    let minEle, maxEle;
    let res = arr[n - 1] - arr[0];

    for (let i = 1; i <= n - 1; i++) {
        if (arr[i] >= k) {
            maxEle = arr[i - 1] + k > arr[n - 1] - k ? arr[i - 1] + k : arr[n - 1] - k;
            minEle = arr[0] + k < arr[i] - k ? arr[0] + k : arr[i] - k;

            res = res < maxEle - minEle ? res : maxEle - minEle;
        }
    }
    return res;
}

let res = minimizeHeight(arr, k, arr.length);
console.log(res);