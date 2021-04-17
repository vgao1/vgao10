// Team Violet Isle :: Victoria Gao, Renee Mui
// SoftDev pd1
// K24 -- Basic functions in JavaScript
// 2021-04-15


//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO");

// unlike Java, don't have to specify data type of variables
var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30;
  return j+x; // returns the sum of x and j
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'}, // the dictionary's values don't have to be the same data type
          func : function(x) { // similar to Java classes with their own functions
            return x+30;
          }
        };


//(define fact (lambda (n) ...)
//iterative implementation of factorial function
var fact = function(n) {
  var prod=1;
  for ( ; n > 1 ; n--){ // can omit the first part because n is already defined as the input of the function
    prod = prod * n; 
  }
  return prod;
};


//(define fact (lambda (n) ...)
// recurvsive implementation of factorial function
var factR = function(n) {
  if ( n<=1 ) {
    return 1;
  }
  else {
    return n * factR(n-1);
  }
};

// running this file from terminal returns document is not defined error
// have to test this function by opening HTML file in browser instead
//The addItem function takes in a String text and adds the string between li tags in the HTML file
var addItem = function(text) {
  var list = document.getElementById("thelist"); // gets the element whose id is "thelist" in the html file
  var newitem = document.createElement("li"); // In the HTML file, create a new element with <li> tags
  newitem.innerHTML = text; // text of the new list item is what the user inputted when calling addItem function
  list.appendChild(newitem); //adds new list item to bottom of list
};

//The removeItem function takes in a non-negative integer n and removes the element at index n in the list of li elements in the HTML file
var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li'); //list containing li elements in the HTML file. 
  listitems[n].remove(); //remove the element at index n
};

// adds "red" to the end of the class name(s) of an li element if "red" wasn't in the class string of the element
/* If an li element's class was an empty string before this function was called, text will be red. 
Some li elements in the HTML file had multiple class names that changed the color attribute; 
the text of these elements would be rendered as the last color in li element's class before "red" was added to the element's class.
For example, an li element with class "green blue" before running this function will have class "green blue red" after running
this function but the text inside the <li> tags would be blue in the browser.
*/
var red = function() {
  var items = document.getElementsByTagName("li");  //list containing li elements in the HTML file
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');  //add "red" to the end of the list items 
  }
};
//When we called red(), only item0 and item7 were red.


// adds "red" to the end of the class of li elements with an even index if "red" wasn't in the class of the element.
// adds "blue" to the end of the class of li elements with an odd index if "blue" wasn't in the class of the element.
var stripe = function() {
  var items = document.getElementsByTagName("li");  //list containing li elements in the HTML file 
  for(var i = 0; i < items.length; i++) {          
    if (i%2==0){   //if the index is even
      items[i].classList.add('red');  //add 'red' to the class of the li element whose index is i in list items. 
    } else {  //if the index is odd
      items[i].classList.add('blue'); //add 'blue' to the class of the li element whose index is i in list items 
    }
  }
};
//When we ran stripe(), only item0 was red.

var buttonCallback = function(e) {
  console.log("\n\nhere comes e...");
  console.log(e); //prints a MouseEvent object
  console.log("\n\nhere comes 'this'...");
  console.log(this);  //"this" refers to the button tag in the HTML file 
}

//when the user clicks on the button, the buttonCallback function is called
var b = document.getElementById('b');
b.addEventListener('click', buttonCallback);

//add 'red' to the classList of an element
var redCallback = function(e) {
  console.log("\n\n---redCallback invoked---")
  console.log(this);  //prints the element
  this.classList.add('red'); 
}

var thelist = document.getElementById("thelist");
var litems = thelist.children; // gets all the elements inside the HTML tag whose id is "thelist"
for(var i = 0; i < litems.length; i++) {
  litems[i].addEventListener('click', redCallback); //add 'red' to the class of the clicked element
  //If one element has multiple color class names, the mouseover and mouseout events switch between the colors in the 
  //order that the colors are in in the element's classList object.
  litems[i].addEventListener('mouseover', function(e){
    console.log("user has moved into this:" + this);  //"this" refers to the HTML element the user hovers over
    this.classList.toggle('green'); //allows the user to change the element's color to green if they put their mouse over an element
  });
  
  litems[i].addEventListener('mouseout', function(e){
    console.log("user has moved out of this:" + this); //"this" refers to the HTML element the user moves their cursor away from 
    this.classList.toggle('blue'); //allows the user to change the element's color to blue if they move their mouse away from an element
  });
}
