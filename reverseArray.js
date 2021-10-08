let nums = [12,14,5,23,77,1]

s=0;
e=nums.length-1;
while(s<e){
    [nums[s],nums[e]]=[nums[e],nums[s]]
    s++;
    e--;
}

console.log(nums);