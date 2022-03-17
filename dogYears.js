// variable for my age
const myAge = 43

//multiplier for early years
let earlyYears = 2
earlyYears *= 10.5

//safirst two years are covered above so...
let laterYears = myAge -2
laterYears *= 4

//add the two numbers together
let myAgeInDogYears = earlyYears + laterYears

//takes my name string and makes it all lower case
myName = "Jamie Heywood".toLowerCase()

//pulls all the info together and console logs it using template literals
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} old in dog years.`)