(function () {


// ******************************* 
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
var array = new Array();
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1: (NOTHING TO DO. ALREADY DONE FOR YOU)
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)

var array = new Array();
array[0] = "Yaakov";
array [1] = 2;
array [2] = function (name) {
 console.log("Hello " + name);
};
array[3] = "John";
array [3] = 4;
array [4] = function (name) {
 console.log("Good Bye "  + name);
};
array[5] = "Jen";
array [5] = 4;

array[6] = "Jason";
array [6] = 4;

array[7] = "Paul";
array [7] = 2;
array[8] = "Frank";
array [8] = 2;
array[9] = "Larry";
array [9] = 2;
array[10] = "Paula";
array [10] = 2;
array[11] = "Laura";
array [11] = 2;
array[12] = "Jason";
array [12] = 4;




console.log(array);
array [2]("Yaakov");

console.log(array);
array[4]("John");

console.log(array);
array[4]("John");

console.log(array);
array[4]("Jen");

console.log(array);
array[4]("Jason");

console.log(array);
array [2]("Paul");

console.log(array);
array [2]("Frank");

console.log(array);
array [2]("Larry");

console.log(array);
array [2]("Paula");

console.log(array);
array [2]("Laura");

console.log(array);
array[4]("Jim");


    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    // STEP 10: (NOTHING TO DO. ALREADY DONE FOR YOU)
    // Loop over the names array and say either 'Hello' or "Good Bye"
    // using either the helloSpeaker's or byeSpeaker's 'speak' method.
    // See Lecture 50, part 1
    for (var i = 0; i < names.length; i++) {
    
      // STEP 11: (NOTHING TO DO. ALREADY DONE FOR YOU)
      // Retrieve the first letter of the current name in the loop.
      // Use the string object's 'charAt' function. Since we are looking for
      // names that start with either upper case or lower case 'J'/'j', call
      // string object's 'toLowerCase' method on the result so we can compare
      // to lower case character 'j' afterwards.
      // Look up these methods on Mozilla Developer Network web site if needed.
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      // STEP 12: (NOTHING TO DO. ALREADY DONE FOR YOU)
      // Compare the 'firstLetter' retrieved in STEP 11 to lower case
      // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
      // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
      // name in the loop.
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();