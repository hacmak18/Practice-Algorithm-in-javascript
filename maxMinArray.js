let nums = [12,14,5,222,77,-1]

let max=nums[0];
let min=nums[0];

for(let i=0;i<nums.length;i++){
    if(nums[i]>max)
        max = nums[i];
    if(nums[i]< min)
        min = nums[i];
}

console.log(`min:${min} max:${max}`)