//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here'
  isTyler(name);
function isTyler(name) {
  if(name === "Tyler")return true;
  else return false;

}
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt()
//to prompt the user for their name, then returns the name.

  //Code Here
  function getName() {
    var name = prompt();
    return name;
  }

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName
// function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome() {
  name = getName();
  alert("Welcome, "+name);
}

//////////////////PROBLEM 4////////////////////

//What is the difference between arguments and parameters?

/*A parameter is a variable in a method definition. When a method is called,
 the arguments are the data you pass into the method's parameters.
 Parameter is variable in the declaration of function.
Argument is the actual value of this variable that gets passed to function*/

//////////////////PROBLEM 5////////////////////
//What are all the falsy values in JavaScript and how do you check
// if something is falsy?
/*NaN,undefined,null,0,"",false*/

//////////////////PROBLEM 6////////////////////

//Create a function called myName that returns your name
function myName() {
  return "Gabriel";
}

//Now save the function definition of myName into a new variable called newMyName
var newMyName = myName;
//Now alert the result of invoking newMyName
alert(newMyName());

//////////////////PROBLEM 7////////////////////

//Create a function called outerFn which returns an anonymous function which returns your name.
function outerFn() {
  return function (){return "gabriel";};

}
  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.
var innerFn = outerFn();
//console.log(innerFn);
  //Code Here

//Now invoke innerFn.
innerFn();
