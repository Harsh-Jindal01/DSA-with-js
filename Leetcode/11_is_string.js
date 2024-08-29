var isSubsequence = function(s, t) {
    let sIndex = 0;
    for (const chars of t) {
        if(sIndex === s.length) break
        if(s[sIndex] === chars) sIndex++
    }

    return sIndex === s.length
};


console.log(isSubsequence('abc', 'azkbmnopc'));
