// COMMON JS CODE CHALLENGES //


// PALINDROME: given a string, return true if the string is a palindrome and false if it isn't.

//PROBLEM
palindrome('racecar') === true 
palindrome('table')  === false 

//SOLUTION
const palindrome = str => {
    //turn the string into all lowercase for ===
    str = str.toLowerCase()
    //reverse string & return the result => array, reverse, join, compare
    return str === str.split('').reverse().join('')
}



// FIZZBUZZ: 1) console log the numbers from 1 to n, where n is the integer the function takes as it's parameter, 2) logs fizz for multiples of 3, 3) logs buzz for multiples of  5, 4) logs fizzbuzz for multiples of both 3 and 5.

//PROBLEM
fizzBuzz(5) -->
1, 2, fizz, 4, buzz 


//SOLUTION
const fizzBuzz = num => {
    //giving i the value of 1 or another number
    for(let i = 1; i <= num; i++) {
        //checking if multiple of 3 and 5
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } // multiple of 3?
        else if(i % 3 === 0) {
            console.log('fizz')  
         } // multiple of 5? 
         else if(i % 5 === 0) {
             console.log('buzz')
         } else { // just show number
             console.log(i)
         }
    }
}



// ANAGRAM: same letters in the same quantity arranged differently 

//PROBLEM 
anagram('finder', 'Friend')  --> true
anagram('hello', 'bye') --> false

//SOLUTION 
//helper function that builds the object to store the data 
const buildCharObj = str => {
    const charObj = {}
    for(let char of str.replace(/[^\w]/g).toLowerCase()) {
        //if the object already has a key value pair 
        //equal to the value being looped over 
        //increase the value by 1, otherwise add 
        //the letter being looped over as key and 1 as its value 
        charObj[char] = charObj[char] + 1 || 1
    }
    return charObj
}
//main function
const anagram = (strA, strB) => {
    //function that holds strA data
    const aCharObj = buildCharObj(strA)
    //function that holds strB data 
    const bCharObj = buildCharObj(strB)
    //compare number of keys in the two objects 
    //(anagrams must have the same number of letters)
    if(Object.keys(aCharObj).length !== Object.keys(bCharObj).length){
    return false
}   //if same number of keys == same number of characters 
    //compare if same letters in same amounts 
    for(let char in aCharObj) {
        if(aCharObj[char] !== bCharObj[char]) {
            return false
        }
    }
    //if both above checked, return true 
    return true 
}



//FIND THE VOWELS: returns the number of vowels in a string 

//PROBLEM
findVowels('hello') // --> 2
findVowels('why') // --> 0

//SOLUTION 
const findVowels = str => {
    let count = 0 
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let char of str.toLowerCase()) {
        //includes() method can determine if a string/array contains a certain value 
        if(vowels.includes(char)){
            count ++
        }
    }
    return count 
}

//OR

const findVowels = str => {
    //match method used with reg expression = powerful searches. 
    //return char length or null 
    const matched = str.match(/[aeiou]/gi)
    return matched ? matched.length : 0
}



