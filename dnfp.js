function swap(a, i, j) { 
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

//  Linear time partition routine to sort a list containing 0, 1, and 2.
//  It is similar to 3–way partitioning for the Dutch national flag problem.
function threeWayPartition(a) {
    start = mid = 0
    pivot = 1
    end = a.length - 1

    while (mid <= end) {
        if (a[mid] < pivot) {      // current element is 0
            swap(a, start, mid)
            start = start + 1
            mid = mid + 1
        }
        else if (a[mid] > pivot) {    // current element is 2
            swap(a, mid, end)
            end = end - 1
        }
        else                   // current element is 1
            mid = mid + 1
    }
}

a = [0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0]
threeWayPartition(a)
console.log(a)