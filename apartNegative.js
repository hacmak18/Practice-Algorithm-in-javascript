
function apart(arr, n)
{
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            if (i != j){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
    }
}
 
// Driver code
let arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
let n = arr.length;
apart(arr, n);
console.log(arr);