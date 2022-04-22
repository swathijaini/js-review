/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring of you to use, we may not have done in class. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
   let  myFirstName = "Kiran";
  

// 2.) Change the value of this variable
      
   myFirstName = "Akhil";

// 3.) Change the data type of this variable
       myFirstName  = 123;


// 4.) Create another variable and the one from above to concatenate
      let  myLastName = "Jaini"
      console.log("My  name is :" + myFirstName + '' +  myLastName);




// 
// 5.) Use any of the variables above or create new ones and print using string interpolation
 console.log("My name is changed from :" + myFirstName + " to swathi " +  myLastName);
 

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O 
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
let friend = "sabrina"
console.log(friend.charAt(4));

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
let myToy = "Teddy"
 let code = myToy.charCodeAt(2);
 console.log(code);

// Using fromCharCode() - make it readable for us :). You'll see!
 

let text = String.fromCharCode(72,69,76,79);
console.log(text);







// Take your first and last name and concat()
console.log(myFirstName+ myLastName);

// Create a string and make it return true using startsWith()
let string1 =" Today is cloudy";
console.log(string1.startsWith(' Tod'));




// Now use any variable with endsWith() and return false
console.log(string1.endsWith('Tod'));

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, '
console.log(ozgur.includes("time"));

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?

let joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."

let helpFindCowIndex = joshHadALittleLambOopsCow.indexOf("cow");

console.log(helpFindCowIndex);

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.

const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
const searchTerm = "Vanessa";
const result = vanessa.lastIndexOf("Vanessa")
console.log(`The index of  1st  "${searchTerm}"  from the end is  "${result}" `);

 


// Can we use length for strings? I don't know, you tell me.
//We can use length but it counts the spaces .Like below code it counts the spaces .

const noWeCantTeo = "but did you try it out though?" 

console.log(noWeCantTeo.length);



// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"

const result1 = replaceGokuWithVegeta.replace("Goku","Vegeta");

console.log(result1);

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
const position = joshIsLookingForWifey.search('wifey' );
console.log(position);

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
const  sliceNumber = pizzaSentence.search('other');
console.log(sliceNumber)//returns index position of other//
console.log(pizzaSentence.slice(7));



// Now using the pizza sentence, return only pizza (before the comma)
const sliceNumber2= pizzaSentence.search('pizza') ;
console.log(sliceNumber2);
console.log(pizzaSentence.slice(0,5));

// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. 
//Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBillArray = ["Yaz, Poornima, and Leshawn"];
console.log(splitTheBillArray);

// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.

// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
console.log(angry.toLowerCase());

// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 

// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
console.log(jahlunSaidToPutSomeRespectToHisName.toUpperCase());

// substring()
// on the chopping block...

// Returns "ell"
const basicGreeting = "Hello World"
let returnOfEll = basicGreeting.substr(1, 3);
console.log(returnOfEll)


// Returns "JavaScript"
const ohReally = "JavaScript Substring"
let returnJavaScript = ohReally.split(" ")[0]
console.log(returnJavaScript);


// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
const domain = aslDays.substring(aslDays.lastIndexOf("@")+1);
console.log(domain)


// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
let texttrim = "                If only I can use this for my love handles     ";
console.log(texttrim.trim())
// =================================================
//                     BOOLEAN
// =================================================

//ç 
// With the powers of logical and comparison operators, PRINT TRUE please!

let  a = "With the powers of logical and comparison operators, PRINT TRUE please! ";
console.log(a!="with the powers of logical and comparison operators, PRINT TRUE please!")
// Replace the underscores.

// const a = 5;
// const b = 10;
// const c = 15;
// const d = "Keke"

// console.log(a _ b)
// console.log(c _ b)
// console.log(d _ d)
// console.log(d _ a)
// console.log(a _ 15)
// console.log(a _ b _ c)
// console.log(c _ b _ a _ d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. 
//Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
for (let i=1;i<=10;i++){
console.log("Kens room is spinning because he has headache " )
}



// Harry said that was so mean of Teo to do Ken dirty like that. 
//Make Teo's vision spin 20 times FOR LOOP.

for (i =1;i<=20;i++){
   console.log("Teo's vision");
}

// But wait! Lisa said, while Teo is spinning 20 times. 
//Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
//    let k  =1 ;
//   while (k<=20)
// {
//    console.log("I am Sorry")
//    i++;
// }
// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {thing1: 'shoes',thing2: 'clotes',thing3: 'gaming console'}
for (const property in whateverQueenBeySaid){
   console.log(`${property}: ${whateverQueenBeySaid[property]}`);
}



// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']
for( const key  in lana){
   console.log(`${key}: ${lana[key]}`);
}

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']


for (const [index,item] of tia.entries()){
   console.log(`${item} at ${index}`)

}

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
 const perscholas = ['Amira', 'Arely', 'Jonathan']
 
 console.log("\n");
 
 perscholas.forEach(item  => {
    const temp = "PS"
    console.log(`${temp} ${item}`)
 });

 console.log("\n");

// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push()
// pop()
// unshift()
// shift()
// concat()
// splice()
// slice()
// sort()
// includes()
// indexOf()
// length

 const fruits = ['apple', 'banana', 'orange']
console.log("\n")
// Print banana
console.log(fruits.slice(1,2))
//console.log(fruits.splice(1,1))

// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.

 console.log(`\n ${fruits.join(" ")}`)

// Remove orange

 console.log(`poping fruit '${fruits.pop()}'`)

// Add strawberry, kiwi, and grapes at the end
console.log(fruits.push("strawberry"))
console.log(fruits.push("kiwi"))
console.log(fruits.push("grapes"))

// Remove apple

fruits.shift()
console.log(`\n ${fruits.join(" ")}`)

// Add mango at the beginning of the array
fruits.unshift("mango")
console.log(`\n ${fruits.join(" ")}`)

// Add lemon, and grapefruit between mango and banana
fruits.splice(1,0,"lemon", "grapefruit")
console.log(`\n ${fruits.join(" ")}`)
// Remove banana and strawberry
fruits.splice(3,2)
console.log(`\n ${fruits.join(" ")}`)


// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.

const exoticFruits = fruits.concat(["dragon fruit", "jack fruit", "custard apple" ])

console.log(`\n ${exoticFruits.join(", ")}`)

// Print the last two exotic fruits without altering the newly concatenated array.
console.log("Last 2 exotic fruits")
exoticFruits.slice(exoticFruits.length-2, exoticFruits.length).forEach(x => {
   console.log(x)
})

// Monalissa said she needs help re-organizing her items in alphabetical order.
 const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
 console.log(monalissaIsMessy.sort())

 // Kevin accidentally stepped into the mirror world and needs help reversing his words.
 const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
 console.log(mirrorMirrorOnTheWall.reverse())

// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
 const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
 console.log(RafaelNoBadWords.split(" ").filter(x => x != "badword").join(" "))

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
 const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
console.log(numbersToAddUp.reduce((previousValue, currentValue) => previousValue + currentValue))
// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
const test = [...numbersToAddUp]

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
const final = [...numbersToAddUp, ...test]
// Using the variable with the newly connected arrays, use spread operator to add something at the end.
const anotherFinal = [...final, "test"]
// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
const anotherFinal1 = ["test",...final]
// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
// Tosi wants ihatethis. :) Print!
const num = 2
const num1 = 0
const num2 = 1
console.log(donutShop[num][num1][num1][num2][num1])
// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'



// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'

const coolest = "coolest1"

if(coolest == coolest)
   console.log("You got that right!")
else
   console.log("James wants to argue. He says he's the best!")

// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
function sayGreeting()
{
   console.log("Hello, ma'amsir!")
}
sayGreeting()

// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.

 function dummyFunction(parameter)
 {
    console.log(`This is my ${parameter}`)
 }

 dummyFunction("Swathi Jaini")

// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
function addValues(one, two, three)
{
   console.log(one + two + three)
}

const values = [1,2,3]

addValues(...values)

// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts

function decideClub(fighterName)
{
   if(fighterName == 'Teo')
      return '1st rule: You do not talk about Fight Club.'
   else if(fighterName == 'Manara')
      return '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
   else if(fighterName == 'Liv')
      return '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
   else if(fighterName == 'Devin')
      return '4th rule: Only two guys to a fight.'
   else 
      return 'No shirts'

}

console.log(decideClub("asdfasf"))

// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.

  function hello()
  {
     console.log("Hello")

     return    () =>  console.log("Goodbye") 
  }

hello()()
// Create a function expression with your first name as the variable and then print your first and last name
swathi = () => console.log("swathi jaini")
swathi()
// Create an arrow function that accepts a number and have it return that number doubled

const doubleTheValue = (x) => 2*x
console.log(doubleTheValue(6))

// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.

class human{
   constructor(name, age, location){
   this.name = location;
   this.age = age;
   this.location = location;
   }
   }

// Access the name using dot notation

const amulya = new human("amulya kalvagadda", 9, "boston")
console.log(amulya.age);
// Access the age using square brackets
console.log(amulya["age"])
// Use object destructuring to access location
const {location} = amulya
console.log(location)

// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}

// Print overgrow
console.log(bulbasaur.abilities[0].ability)
// Print cut
const {moves: [one, two, three] } = bulbasaur
console.log(three)

// Print Bulbahhhh!!!!!
bulbasaur.sound()

// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
bulbasaur.height = 7
console.log(bulbasaur.height)

// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur["order"] = 1

// Print an array that contains every single properties in bulbasaur
console.log(bulbasaur)

// Print every single properties one by one in the console
Object.keys(bulbasaur).forEach(x => console.log(x))
// Print an array that contains every single values in bulbasaur
Object.keys(bulbasaur).forEach(x => console.log(bulbasaur[x]))