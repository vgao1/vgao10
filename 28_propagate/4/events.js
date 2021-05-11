/*
Team DVD (Victoria Gao, Dean Carey)
SoftDev pd0
K28 -- Bubble Bubble Toil Trouble
2021-05-11
*/
// demo 4
// JS event propagation

// Name the collections of TDs, TRs, and overall table
var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];


var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  //The pop-ups after the first pop-up don't show up in the browser.
  //e.stopPropagation();
};


//Q: Does the order in which the event listeners are attached matter?
/*
No, the order that the event listeners in demo 4 is the same as the order of event listeners in demo 3. 
The variable that determines whether the browser uses bubbling or capturing phase is the third argument
of the event listener. If the third variable is true, the capturing phase is used.
*/

//Predict, then test...
//Q: What effect does the boolean arg have in each?
//   (Leave exactly 1 version uncommented to test...)
/*If the boolean arg is true, the capturing phase is used. If there isn't a boolean 
argument or the argument is set to false, the bubbling phase is used.
*/
for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky, true);
  //tds[x].addEventListener('click', clicky, false);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky, true);
  //trs[x].addEventListener('click', clicky, false);
}

table.addEventListener('click', clicky, true);

//table.addEventListener('click', clicky, false);