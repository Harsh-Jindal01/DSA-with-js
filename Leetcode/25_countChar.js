/*

Title: Count Character Types in a String
Difficulty: Easy

Problem Statement
Given a string s, count the number of:

Vowels (a, e, i, o, u - case insensitive)
Consonants (other alphabetic characters)
Digits (0-9)
White spaces (spaces, tabs, and newlines)
Special characters (any other characters)

*/


function countCharacters(s) {
    let vowels = 0, consonants = 0, digits = 0, whitespaces = 0, special = 0;
    for (let c of s) {
        const lowerC = c.toLowerCase();
        if ('aeiou'.includes(lowerC)) {
            vowels++;
            continue;
        }
        if (lowerC >= 'a' && lowerC <= 'z') {
            consonants++;
            continue;
        }
        if (/\d/.test(c)) {
            digits++;
            continue;
        }
        if (/\s/.test(c)) {
            whitespaces++;
            continue;
        }
        special++;
    }

    return `
    vowels: ${vowels},
    consonants: ${consonants},
    digits: ${digits},
    whitespaces: ${whitespaces},
    special: ${special},
    `
    ;
}

const string = "ha&$h1 5";
console.log(countCharacters(string));
