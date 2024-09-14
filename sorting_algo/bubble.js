function bubbleSort(arr){
    let isSwap;

    do {
        isSwap = false;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] && arr[i+1] && arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]] //swaping
                isSwap = true
            }
        }
    } while (isSwap);

    return arr;
}

console.log(bubbleSort([1, 6, 7, 4, 5]))