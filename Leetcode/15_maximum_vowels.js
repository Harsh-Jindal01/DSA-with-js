var maxVowels = function(s, k) {
    const Vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let currentVowelsCount = 0, maxVowelsCount = 0

    for(let i = 0; i < k; i++){
        if(Vowels.has(s[i])) currentVowelsCount++
    }

    maxVowelsCount = currentVowelsCount;

    for (let i = k; i < s.length; i++) {
        if(Vowels.has(s[i])) currentVowelsCount++
        if(Vowels.has(s[i - k])) currentVowelsCount--

        maxVowelsCount = Math.max(maxVowelsCount, currentVowelsCount)
    }

    return maxVowelsCount
};

console.log(maxVowels("abciiidef", k = 3));
