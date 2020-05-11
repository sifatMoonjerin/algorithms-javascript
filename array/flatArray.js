const flatArray = arr => {
    let resArray = [];

    arr.forEach(el => {
        if(Array.isArray(el)){
            const elArray = flatArray(el);
            resArray = [...resArray, ...elArray];
        } else{
            resArray.push(el);
        }
    })

    return resArray;
}


console.log(flatArray([1,[2,3],4,[5,[6,7,[8]]],9]));