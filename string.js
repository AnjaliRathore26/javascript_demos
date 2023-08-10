//strings are immutable
//methods of string

//string length
/*
let str="Hello everyone";
console.log("Length of the string : "+ str.length)

//slice
console.log("Slice of string: "+ str.slice(3,9))
console.log("Slice of string: "+ str.slice(-12))

//substring
console.log("substring : "+ str.substring(6,14))

//replace
console.log("replace the string :"+ str.replace("Hello","Hye"))

let str2="I am anjali";
//concat
console.log("concate the string :" + str.concat(" ",str2))

//toUpperCase
console.log("Convert in uppper case : "+ str.toUpperCase())

//toLowerCase
console.log("Convert in uppper case : "+ str.toLowerCase())

//trim
let s="            hello    "
console.log("trim the string : "+ s.trim())

//padstart
console.log(str.padStart(4,"h"))

//charAt
console.log(str.charAt(4))


//a string can convert into array using split method

console.log(str.split(","))
console.log(str.split(""))
console.log(str.split("|"))
*/

/*
search methods of strings
indexOf
lastIndexOf
search 
match
matchall
includes
endsWith
startWith
*/
/*
let str=" mouse hide from cat , cat hide from dog";
console.log("indexOf :" + str.indexOf("cat"))

console.log("lastIndexOf :"+ str.lastIndexOf("cat"))

console.log("search :"+ str.search("cat"))

console.log("match :"+ str.match("dog"))

console.log("matchall:"+ str.matchAll("/cat/g"))

console.log("includes : "+ str.includes("hide"))

console.log("endwith :" + str.endsWith("dog"))

console.log("startsWith: "+ str.startsWith("Hello"))
*/

//string literal

let boy1="anish";
let boy2="adarsh"

console.log(`${boy1} is friend of ${boy2}`)
