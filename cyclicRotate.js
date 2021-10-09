let numsToShit = 6
let a = [9, 8, 7, 6, 4, 2, 1, 3];
let alen = a.length - 1;

function rotate(temp, numsToShit, a) {
    let ans;
    for (let k = 0; k < numsToShit; k++) {
        ans = rotateByOne(a, k, temp);
    }
    return ans;
}

function rotateByOne(a, k, temp) {
    for (let i = a.length - 1 - 1; i >= 0; i--) {
        a[i + 1] = a[i];
    }
    a[0] = temp[k];
    return a;
}

if (numsToShit >= a.length) {
    console.log(`numsToShift should be less then ${a.length}`);
} else {
    let temp = [];
    for (let j = 0; j < numsToShit; j++) {
        temp[j] = a[alen--];
    }
    let ans = rotate(temp, numsToShit, a);
    console.log(ans);
}