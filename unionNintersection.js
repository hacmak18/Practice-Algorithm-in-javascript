let arr1 = [1, 3, 5, 6, 8, 9]
let arr2 = [2, 3, 4, 6, 7, 8, 1]

let arr3 = [1, 3, 5, 6, 8, 9]
let arr4 = [2, 3, 4, 6, 7, 8, 1]


function union(a, b) {
    let unionList = a;
    for (let j = 0; j < b.length; j++) {
        if(unionList.indexOf(b[j]) < 0){
            unionList.push(b[j]);
        }
    }
    return unionList;
}

function intersection(a,b){
    let intersectList = a;
    for(let j=0;j<b.length;j++){
        if(!(b.indexOf(intersectList[j]) > -1)){
            intersectList.splice(j,1);
        }
    }
    return intersectList;
}

let u = union(arr1,arr2);
let i = intersection(arr3,arr4);

console.log('Union ',i);
console.log('Intersection ',i);