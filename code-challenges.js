// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.
//create a func called divideByThree that takes a parameter called num
//divide num by modulo to check if divisble by three
var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"
const divideByThree = (num) => {
    if (num % 3 === 0) {
       return `${num} is divisible by three`
    } 
    else {return `${num} is not divisible by three`}
}

console.log(divideByThree(num1))
console.log(divideByThree(num2))
console.log(divideByThree(num3))

//--------------------------------------------------------------------------
// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
//create a fuction called capitalized which takes in an array 
//iterate over the first character of capArray[i][0] to cap each word
//use slice method
//return and join capArray
//refactor using map..
const capitalized = (array) => {
    let capArray = [];
    for (let i = 0; i < array.length; i++) {
        let capLetters = (array[i][0].toUpperCase())
        let lowerLetter = array[i].slice(1)
        capArray.push(capLetters + lowerLetter)
    }
    return capArray;
}

console.log(capitalized(randomNouns))
//--------------------------------------------------------------------------
// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.
//create a function called numsOnly that takes in an array with mixed data types
//check typeof for numbers and push to a new array called numbers
//sort from least to greatest using sort method
var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]
const numsOnly = (array) => {
   return array.filter(val => typeof val === "number")
    .sort(function(a,b) {return a-b}) //now how do I solve without using a built in method?
}

console.log(numsOnly(mixedDataArray))

//--------------------------------------------------------------------------
// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
//create a fuction called vowelIndex
//create an array containing vowels
//split the string
//iterate over the string to check if it includes a vowel
//return the index of first vowel
var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3
const firstVowel = (str) => {
let vowels = ['a', 'i', 'o', 'e', 
'u']
for (let i = 0; i < str.length; i++) {
if (str[i].includes(vowels)) {
    return 'contains a vowel'
        }
    }
}
    


//vowels.filter((str, i) => {vowels.indexOf(str) === i
//})


console.log(firstVowel(vowelTester1))
console.log(firstVowel(vowelTester2))



//--------------------------------------------------------------------------
// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"


//had to look up a way to convert a operator that was in string format to an actual operator and found eval
const calculator = (num1, op, num2) => {
    if (op === "/" || num2 === 0) {
        return `Can't divide by 0!`
    }
    else {return eval(num1 + op + num2)}
}



// Uncomment and use the following console logs to test your function
 console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
