// 1. You are given a string (STR) of length N, consisting of only the 
// lower case English alphabet. Your task is to remove all the duplicate
// occurrences of characters in the string.
// Input:
// abcadeecfb
// Output:
// abcdef
string = "a b c a d e e c f b"

let word = string.split(" ")

let remove = word.filter((value, index, src) => {
    return src.indexOf(value) == index 
}).join(' ')
console.log(remove)
//OR,
let string1 = "abcadeecfb";
let result1 = Array.from(new Set(string1)).join("");
console.log(result1);


// 2. You are given a string (STR) of length N, you have to print the 
// count of all alphabet.(using maps)
// Input:
// abcadeecfb
// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1
let str = "abcdadeecfb"

let result = new Map();

for(let i = 0; i<str.length; i++)
{
    let char = str.charAt(i)
    if (result.has(char)) 
    {
        let val = result.get(char)
        result.set(char, val+1)
    } 
    else 
    {
        result.set(char, 1)
    }
}
console.log(result)
//OR,
let string2 = "abcadeecfb";
let result2 = [...string2].reduce((result, char) => ((result[char] = (result[char] || 0) + 1), result), {});
console.log(result2);
