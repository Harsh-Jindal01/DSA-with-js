function mergeSort(arr){
  if(arr.length === 1) return arr
  const middle =  Math.floor(arr.length/2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
  let result = []
  let leftBox = 0
  let rightBox = 0
  while(leftBox < left.length && rightBox < right.length){
    if(left[leftBox] < right[rightBox]){
      result.push(left[leftBox])
      leftBox++
    }else{
      result.push(right[rightBox])
      rightBox++
    }
  }
  return [...result, ...left.slice(leftBox), ...right.slice(rightBox)]
}

console.log(mergeSort([1, 6, 7, 4, 9, 11]));
