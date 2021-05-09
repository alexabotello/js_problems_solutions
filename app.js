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



//FIZZBUZZ

//PROBLEM:  1) console log the numbers from 1 to n, where n is the integer the function takes as it's parameter, 2) logs fizz for multiples of 3, 3) logs buzz for multiples of  5, 4) logs fizzbuzz for multiples of both 3 and 5.


//SOLUTION:
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



