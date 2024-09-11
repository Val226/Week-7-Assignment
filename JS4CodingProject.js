// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

const ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!

let result = ages[ages.length - 1] - ages[0];
console.log(result):

// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(result);
console.log(ages);

// Use a loop to iterate through the array and calculate the average age.

let sum = 0;

for (let i = 0; i < ages.length; i++);{
sum += ages[i];
let average = sum/ages.length;
}
console.log(average);

// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Use a loop to iterate through the array and calculate the average number of letters per name.

let totalLetters = 0;
for (let i = 0; i < names.length; i ++); {
totalLetters += names.length;
}
let averageLetters = totalLetters/names.length
console.log(totalLetters);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let concatenatedNames = " ";
for (let i = 0; i < names.length; i++) {
concatenatedNames += names[" "];
}
console.log(concatenatedNames);

// How do you access the last element of any array?

// You access the last element of an array with the following code:
// array.length - 1

// How do you access the first element of any array?

// You access the first element with the following code:
// array[0]

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

const nameLengths = [];

for (let i = 0; i < names.length; i++) {
nameLengths.push(names[i].length)
}
console.log(nameLengths);

// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let totalLength = 0;
for (let i = 0; i < nameLengths.length; i++) {
totalLength += nameLengths[i]
}
console.log(totalLength);


// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function helloWorld = (word, n) {
let result  = '';
for (let i = 0; i < n; i++) {
result += word
}
return result;
}
console.log(helloWorld('hello',3));

// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

function fullName = (firstName, lastName);

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.


// Write a function that takes an array of numbers and returns the average of all the elements in the array.

// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.