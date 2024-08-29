var canPlaceFlowers = function(flowerbed, n) {
    
  // let count = 0
  // for(let i = 0; i<flowerbed.length; i++){

  //   if(flowerbed[i] === 0){
  //     let isleft = (i === 0 || flowerbed[i - 1] === 0)
  //     let isright = (i === (flowerbed.length - 1) || flowerbed[i + 1] === 0)

  //     if(isleft && isright){
  //       flowerbed[i] = 1;
  //       count++
  //       if(count >= n) return true
        
  //     }

  //   }

  // }
  // return count >= n

  let count = 0

    for(let i = 0; i < flowerbed.length; i++){
        if(flowerbed[i] === 0){
            let isleftEmpty = (i === 0 || flowerbed[i - 1] === 0)
            let isrightEmpty = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)

            if(isleftEmpty && isrightEmpty){
                flowerbed[i] = 1
                count++
                if(count >= n) return true
            }
        }
    }

    return count >= n
    

};

console.log(canPlaceFlowers([1,0,0,0,1,0,0], n = 2));