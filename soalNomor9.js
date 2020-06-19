const bubbleSort = (arr) => {

    let l = arr.length
    let i;
    let j;
    let stop;

    for (i=0; i < l; i++){
        for (j=0, stop=l-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

const result = bubbleSort([10, 6, 9, 3, 8, 2, 7, 4, 5, 1])
console.log(result)