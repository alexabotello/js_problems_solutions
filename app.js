// COMMON JS CODE CHALLENGES //


// PALINDROME: given a string, return true if the string is a palindrome and false if it isn't.

//PROBLEM
palindrome('racecar') === true 
palindrome('table')  === false 

//SOLUTION
const palindrome = str => {
    //turn the string into all lowercase for ===
    str = str.toLowerCase()
    //reverse string & return the result
    return str === str.split('').reverse().join('')
}


