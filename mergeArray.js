let arr1=[1, 5, 9, 10, 15, 20];
let arr2=[2, 3, 8, 13];
 
function merge(m,n)
{
    for (let i=n-1; i>=0; i--)
    {
        /* Find the smallest element greater than ar2[i]. Move all
           elements one position ahead till the smallest greater
           element is not found */
        let j, last = arr1[m-1];
        for (j=m-2; j >= 0 && arr1[j] > arr2[i]; j--)
            arr1[j+1] = arr1[j];
   
        // If there was a greater element
        if (j != m-2 || last > arr2[i])
        {
            arr1[j+1] = arr2[i];
            arr2[i] = last;
        }
    }
}
merge(arr1.length,arr2.length);
console.log(arr1,arr2);