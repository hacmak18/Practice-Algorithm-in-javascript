let nums = [1,1,2]

for(let i=0;i<=nums.length-1;i++){
    for(let j=i+1;j<=nums.length-1;j++){
        if(nums[i]==nums[j]){
            console.log(nums[i]);
        }
    }
}