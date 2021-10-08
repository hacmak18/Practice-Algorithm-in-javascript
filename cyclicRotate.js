let numsToShit = 3
let a = [9, 8, 7, 6, 4, 2, 1, 3];
let alen = a.length - 1;

let temp = [];

for (let j = 0; j < numsToShit; j++) {
    temp[j] = a[alen--];
}

console.log(temp);

function rotate(temp, numsToShit) {

    for (let k = 0; k < numsToShit; k++) {
        for (let i = alen - 1; i >= 0; i--) {
            a[i + 1] = a[i];
        }
        a[k]=temp[k];
    }
}

rotate(temp, numsToShit);

console.log(a)