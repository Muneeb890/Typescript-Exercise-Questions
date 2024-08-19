// Qs-1: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
//let firstName: string = "Dany";
//console.log(`Hello ${firstName}, would you like to learn some Python today?`);

// Qs-2: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//let firstName: string = "ali shah";
//console.log(firstName.toUpperCase());
//console.log(firstName.toLowerCase());
//console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1));

//Qs-3: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//console.log('Adolf Hitler once said, "If you want to shine like a sun you have to burn like it."')

//Qs-4: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
/*let famous_person: string = "Adolf Hitler";
let message: string = 
"If you want to shine like a sun you have to burn like it.";
console.log(`${famous_person} once said, ${message}`)*/

//Qs-5: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
/*let yourName: string = "Ali\tShah";
let fatherName: string = "Jamal\nShah";
console.log(yourName);
console.log(fatherName);*/

//Qs-6:Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
/*let a: number = 5;
let b: number = 10;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);*/

//Qs-7: You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
/*console.log(5 + 3);
console.log(18 - 10);
console.log(2 * 4);
console.log(16 / 4);*/

//Qs-8:Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
/*let num: number = 2002;
console.log(`My favourite number is ${num}`)*/

//Qs-9: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//Addition Program
/*let a: number = 10;
let b: number = 20;
console.log(`${a}+${b}=${a+b}`);
//Subtraction Program
console.log(`${b}-${a}=${b-a}`);*/

//Qs-10: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
/*let names: string[] = ["Ali Ahmed", "Anas Ali", "Ali Irfan"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);*/

//Qs-11: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
/*let message: string = "is a very good boy";
console.log(names[0]+ "" +message);
console.log(names[1]+ "" +message);
console.log(names[2]+ "" +message);*/

//Qs-12: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
/*let vehicles:string[] = [
    "Honda Motorcycle",
    "Honda Civic",
    "Toyota Corrola",
    "Suzuki Alto"
];
vehicles.map((item) => console.log(`I would like to own a ${item}`));*/

//Qs-13: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
//let guestArr: string[] = ["Moin", "Moiz", "Munib"];
//guestArr.map((item) => console.log(`Dear${item},you are cordially invited to a dinner`));

/*Qs-14: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
/*console.log(guestArr);
let canNotAttend: string = "Munib";
console.log(canNotAttend + " " + "cannot make it, for dinner.");

let newGuest: string = "Muneer";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;

guestArr.map((item) => console.log(`Dear ${item} ,you are cordially invited to a dinner`));*/

/*Qs-15: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 

• Use append() to add one new guest to the end of your list. 

• Print a new set of invitation messages, one for each person in your list.*/
/*
let guestArr: string[] = ["Moin", "Moiz", "Munib"];
let canNotAttend: string = "Munib";

let newGuest: string = "Muneer";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;

guestArr.map((item)=>(
   console.log(`Dear ${item}, I found a bigger dinner table.`)
));

guestArr.unshift("Mubeen");
console.log(guestArr);

let middleGuest: string = "Moosa";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);

guestArr.push("Munam");
console.log(guestArr);

guestArr.map((item)=>(
      console.log(`Dear ${item} ,you are cordially invited to a dinner`)
));*/

/*Qs no 16: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
/*console.log("I can invite only two people for dinner");
while (guestArr.length > 2){
    let removeGuest = guestArr.pop();
    console.log(`Dear ${removeGuest}, you are not invited to the dinner.`);
}
guestArr.map((item) =>
    console.log(`Dear $(item), you are still invited to the dinner.`)
);
guestArr.pop();
guestArr.pop();
console.log(guestArr);*/

/*Qs no 17: Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
/*
let countryArr = ["India", "Pakistan", "Nepal", "America", "China", "Japan"];
console.log(countryArr);
console.log(countryArr.sort());
console.log(countryArr);
console.log(countryArr.reverse());
console.log(countryArr);

let sortedArr = ["India", "Pakistan", "Nepal", "America", "China", "Japan"];
sortedArr.sort();
console.log(sortedArr);
sortedArr.reverse();
console.log(sortedArr);*/


//Qs no 18: Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

//console.log(guestArr.length + " " + "people are invited to dinner.")

//Qs no 19: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// let programmingLanguages: string[] = [
//     "c", "C++", "Java", "PHP", "Python"
// ];
// programmingLanguages.map((item) => (
//     console.log(item)
// ));

//Qs no 20:They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// let person:{name:string, fName:string, age: number} = {name: "Alina Shah", fName: "Ali Shah", age: 21};
// console.log(person);

//Qs no 21: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// let programmingLanguages: string[] = [
//        "c", "C++", "Java", "PHP", "Python"
//  ];
//  console.log(programmingLanguages[6]);
//  console.log(programmingLanguages[3]);

// Qs no 22: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//Test 01:
// let car:string = 'subaru';

//  console.log("Is car === 'subaru'? I predict True.");
//  console.log(car === 'subaru');

//  //Test 2:
//  console.log("Is car == 'subaru'? I predict True.");
//  console.log(car == 'subaru');

//  //Test 3:
//  console.log("Is car != 'Honda'? I predict True.")
//  console.log(car != 'Honda');

//  //Test 4:
//  console.log("Is car !== 'Ford'? I predict True.")
//  console.log(car !== 'Ford');

//  //Test 5:
//  console.log("Is car.Upper case == 'SUBARU'? I predict True.")
//  console.log(car.toUpperCase() == 'SUBARU');

//  //Test 6:
//  console.log("Is car == 'SUBARU'? I predict True.")
//  console.log(car == 'SUBARU');

//  //Test 7:
//  console.log("Is car === 'SUBARU'? I predict True.")
//  console.log(car === 'SUBARU');

//  //Test 8:
//  console.log("Is car === 'Ford'? I predict True.")
//  console.log(car === 'Ford');

//  //Test 9:
//  console.log("Is car === 'Toyota'? I predict True.")
//  console.log(car === 'Toyota');

//  //Test 10:
//  console.log("Is car === 'Honda'? I predict True.")
//  console.log(car === 'Honda');

//  Qs 23: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

//• Tests for equality and inequality with strings
/*
const string1: string = "apple";
const string2: string = "orange";
console.log(string1 === string2);
console.log(string1 !== string2);

//• Tests using the lower case function

const mixedCaseString: string = "Hello World";
console.log(mixedCaseString.toLowerCase() === "hello world");

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

const num1:number = 10;
const num2:number = 5;

console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);

//• Tests using "and" and "or" operators
const condition1: boolean = true;
const condition2: boolean = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);

//• Test whether an item is in a array
const fruits: string[] = ["Apple", "Mango", "Grapes", "Orange", "Banana"]
console.log(fruits.includes("Apple"));

// • Test whether an item is not in a array
console.log(!fruits.includes("Cherry"));*/

//Qs no 24: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
/*
let alien_color: string = "green";
if(alien_color === 'green'){
    console.log("Player just earned 5 points!")
}

alien_color = "red";
if(alien_color === 'green'){
    console.log("Player just earned 5 points!")
}*/

/*Qs no 25:Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/
/*
let alienColor: string = "green";
if(alienColor === "green"){
    console.log("The player just earned 5 points for shooting the alien")
}else{
    console.log("The player just earned 10 points for shooting the alien")
}

alienColor = "Red";
if(alienColor === "green"){
    console.log("The player just earned 5 points for shooting the alien")
}else{
    console.log("The player just earned 10 points for shooting the alien")
}*/

/*Qs no 26: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
/*
let alienColor: string = "green";
if(alienColor === "green"){
    console.log("The player just earned 5 points for shooting the alien");
}else if(alienColor === "yellow"){
    console.log("The player just earned 10 points for shooting the alien");
}else if(alienColor === "Red"){
    console.log("The player just earned 15 points for shooting the alien");
}else{
    console.log("Please Select Right Color");
}

alienColor = "yellow";
if(alienColor === "green"){
    console.log("The player just earned 5 points for shooting the alien");
}else if(alienColor === "yellow"){
    console.log("The player just earned 10 points for shooting the alien");
}else if(alienColor === "Red"){
    console.log("The player just earned 15 points for shooting the alien");
}else{
    console.log("Please Select Right Color");
}

alienColor = "Red";
if(alienColor === "green"){
    console.log("The player just earned 5 points for shooting the alien");
}else if(alienColor === "yellow"){
    console.log("The player just earned 10 points for shooting the alien");
}else if(alienColor === "Red"){
    console.log("The player just earned 15 points for shooting the alien");
}else{
    console.log("Please Select Right Color");
}*/

/*Qs no 27: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.*/
/*
//Set a value for the variable age
let age: number = 25;

//If the person is less than 2 years old, print a message that the person is a baby.
if(age < 2){
    console.log("Person is a Baby");
}

//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if(age >= 2 && age < 4){
    console.log("Person is a Toddler");
}

//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if(age >= 4 && age < 13){
    console.log("Person is a Kid");
}

//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if(age >= 13 && age < 20){
    console.log("Person is a Teenager");
}

//If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if(age >= 20 && age < 65){
    console.log("Person is an Adult");
}

//If the person is age 65 or older, print a message that the person is an elder.
else{
    console.log("Person is elder");
}*/

/*Qs no 28: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favourite_foods: string[] = ["Apple", "Banana", "Orange"];

if(favourite_foods.includes("Apple")){
     console.log("I really like apple!");
}
if(favourite_foods.includes("Banana")){
    console.log("I really like banana!");
}
if(favourite_foods.includes("Orange")){
    console.log("I really like orange!");
}
if(favourite_foods.includes("Mango")){
    console.log("I really like mango!");
}
if(favourite_foods.includes("Cherry")){
    console.log("I really like cherry!");
}*/

/* Qs no 29: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/

/*const userNames: string[] = ["Admin", "Mark", "James", "Sam"];

for(let i=0; i<userNames.length; i++){
    if(userNames[i] === "Admin")
    {
        console.log("Hello admin, would you like to see a status report?");
    }else{
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`)
    }
}*/

/*Qs no 30:No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

/*let userNames: string[] = ["Admin", "Ali", "Umar", "Amir"];

if(userNames.length === 0){
    console.log("We need to find some users.")
}else{
    userNames = [];
    console.log("All user have been removed. " + userNames.length);
}*/

/*Qs no 31: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

// let current_users: string[] = ["TaHa", "DanIyaL", "MunEEb", "AneES","Noman"];

// let new_users: string[] = ["Asif","TaHa", "Saad","Mujeeb", "MunEEb"];

// new_users.forEach(newUserName => {
//     let lowerCase: string = newUserName.toLowerCase();
//     if(current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)){
//         console.log(`The username ${newUserName} is not available.Please write a different username`);
//     }
//     else{
//         console.log(`The username ${newUserName} is available.`);
//     }

// })

// Qs no 32: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
/*
let numbers: number[] = [1,2,3,4,5,6,7,8,9];

for(let num of numbers){

    let ordinalEnding: string;

    if(num === 1){
        ordinalEnding = "st";
    }
    else if(num === 2){
        ordinalEnding = "nd";
    }
    else if(num === 3){
        ordinalEnding = "rd";
    }
    else{
        ordinalEnding = "th";
    }
    console.log(`${num}${ordinalEnding}`);
}*/

// Qs no 33: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

// let Pizzas: string[] = ["Pepperoni", "BBQ Chicken", "Creamy Delight"]

// for(let pizza of Pizzas){
//     console.log(`I like ${pizza} pizza`);
// }
// console.log(`I really love pizza!`);

//Qs no 34: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

// let Animals: string[] = ["Dog", "Cat", "Rabbit"]

// for(let animal of Animals){
//     console.log(`A ${animal} would make a great pet.`);
// }
// console.log(`Any of these animals would make a great pet!`);

//Qs no 35: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

// function make_shirt(size: string , text: string){
//     console.log(`Creating a ${size} shirt with the message: ${text}`)
// }

// make_shirt("Large", "John Cena");

//Qs no 36: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// function make_shirt(size: string = "Large" , text: string = "I Love Typescript"){
//         console.log(`Creating a ${size} shirt with the message: ${text}`);
//     }
//     make_shirt();
//     make_shirt("Medium");
//     make_shirt("Small", "I love Javascript");

// Qs no 37:Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

// function describe_city(city: string, country: string = "Default Country."){
//             console.log(`${city} is in ${country}`);
//         }

// describe_city("Karachi", "Pakistan");
// describe_city("Tokyo", "Japan");
// describe_city("London");

// Qs no 38:City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

/*function city_country(city: string, country: string){
                return`${city},${country}`
            }

console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));*/

//Qs no 39:Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

// function make_album (artist:string , tittle:string, tracks?:number){
//     const album: {artist:string , tittle:string, tracks?:number } = {
//         artist : artist,
//         tittle: tittle
//     }
//     if(tracks !== undefined){
//         album.tracks = tracks;
//     }
//     return album;
// }

// const album1 = make_album("Artist 1", "Album Title 1");
// console.log(album1);

// const album2 = make_album("Artist 2", "Album Title 2");
// console.log(album2);

// const album3 = make_album("Artist 3", "Album Title 3", 12);
// console.log(album3);

//Qs no 40: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// let magician : string[] = ["Harry Porter", "John Wick", "Nick Jones"];

// function show_magicians(magician: string[]){
//         magician.forEach(element => {
//             console.log(element);
//         });
// }
// show_magicians(magician)

//Qs no 41: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// let magician : string[] = ["Harry Porter", "John Wick", "Nick Jones"];

// function the_magician (magicianArray : string[]){
//     for (let i=0; i<magicianArray.length; i++){
//         magician[i] = "The Great " + magicianArray[i]
//     }
// }


// function show_magicians(magician: string[]){
//         magician.forEach(element => {
//             console.log(element);
//         });
// }

// the_magician(magician);
// show_magicians(magician);

//Qs no 42: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// let magician : string[] = ["Harry Porter", "John Wick", "Nick Jones"];

// function copyArr(arr:string[]){
//     return[...arr]
// }

// function the_magician (magicianArray : string[]){
//     for (let i=0; i<magicianArray.length; i++){
//         magicianArray[i] = "The Great " + magicianArray[i]
//     }
// }


// function show_magicians(magician: string[]){
//         magician.forEach(element => {
//             console.log(element);
//         });
// }

// const copyMagicianArray = copyArr(magician)

// the_magician(copyMagicianArray);

// console.log("\n\nThis is my original array:")
// show_magicians(magician);

// console.log("\n\nThis is my modified copy of the array:")
// show_magicians(copyMagicianArray);

//Qs no 43: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// function makeSandwitch (item : string[]){

//     console.log("\nMake your sandwitch with:");

//     item.forEach(element => console.log("-" + element));

//     console.log("Enjoy your sandwitch!\n")
// }
// makeSandwitch(["Chicken", "cheese", "lettuce"]);
// makeSandwitch(["Beef", "cheese", "lettuce"]);
// makeSandwitch(["Mutton", "cheese", "bacon"]);

//Qs no 44: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: {[ key: string]: any} [] ): object{
//     const carInfo = {
//         manufacturer,
//         modelName,
//         ...Object.assign({}, ...extraOption)
//     }
//     return carInfo;
// };

// let ans = storeCarInfo("Honda", "Civic", {color:"Black"},{features:["Cruise Control", "ABS"]});
// console.log(ans);