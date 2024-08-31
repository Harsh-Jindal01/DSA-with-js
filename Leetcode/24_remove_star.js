var removeStars = function(s) {
    let stack = [];

    for(let char of s){
        if(char === '*'){
            stack.pop()
        }else{
            stack.push(char)
        }
    }

    return stack.join('')
};

console.log(removeStars('Leet*co*e'));
