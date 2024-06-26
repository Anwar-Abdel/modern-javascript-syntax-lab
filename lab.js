
//---------EXERCISE 1---------//

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const nums2 = nums.map((currentElement) => {
    return currentElement * 2;
  });
  
console.log(nums2); 



//---------EXERCISE 2---------//

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping);
console.log(secondTopping);


//---------EXERCISE 3---------//

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here

  // Object destructuring:
const { make, model } = car;

console.log(make);
console.log(model);


//---------EXERCISE 4---------//

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings2 = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...pizzaToppings2];

console.log(controversialPizzaToppings);



//---------EXERCISE 5---------//

// Duplicate the following object and spread its values into a new variable `myCar`.

const car2 = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here

const myCar2 = {...car2};

console.log(myCar2)



//---------EXERCISE 6---------//

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

let userProfile = {};

let propertyName = "username";

userProfile[propertyName] = "JohnDoe";

console.log(userProfile);


//---------EXERCISE 7---------//
//Imported and Exported files


//---------EXERCISE 8---------//

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function describeAnimal(noun = "cat", adjective = "white") {
    console.log(`The ${noun} is ${adjective}.`);
}

// Examples
describeAnimal();
describeAnimal("turtle", "green");


//---------EXERCISE 9---------//

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// Your code here
console.log(pizza === 'tasty' ? 'yum' : 'yuck');



//---------EXERCISE 10---------//

const localLangConfig = null
const LANG = localLangConfig || 'en';

console.log('Language setting:', LANG);


const userSavedTheme = null; 
const USER_THEME = userSavedTheme || 'light';

console.log('User theme setting:', USER_THEME);



//---------EXERCISE 11---------//

const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.cat?.name;
  
  console.log(cat);