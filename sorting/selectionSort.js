const selectionSort = originalArray => {
    const arr = [...originalArray];
    for(let i = 0; i < arr.length-1; i++){
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
    }
    return arr;
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const arr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const arr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
// const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// const arr = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
// const arr = [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20];
const arr = [-1, 0, 5, 3, 2, -3]
console.log(selectionSort(arr));