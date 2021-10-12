function maxSubArraySum(a, size) {
    var maxint = Math.pow(2, 53)
    var max_so_far = -maxint - 1
    var max_ending_here = 0

    for (var i = 0; i < size; i++) {
        max_ending_here = max_ending_here + a[i] //Counting the sum for a longest substring
        if (max_so_far < max_ending_here) //check if earlier sum of substring is less or not.
            max_so_far = max_ending_here  // assign the sum of a longest substring

        if (max_ending_here < 0)
            max_ending_here = 0
    }
    return max_so_far
}

// Driver code
var a = [-2, -3, 4, -1, -2, 1, 5, -3]

let res = maxSubArraySum(a, a.length);

console.log(res)