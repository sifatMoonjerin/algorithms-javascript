const bubbleSort = originalArray => {
    let arr = [...originalArray];

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length-i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }

    return arr;
}

const arr = [5,1,2,6,2,3,10,8];
console.log(bubbleSort(arr))