/*
Team DVD (Victoria Gao, Dean Carey)
SoftDev pd0
K28 -- Bubble Bubble Toil Trouble
2021-05-11
*/
// demo 3
// JS event propagation

var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];

var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  //The pop-ups after the first pop-up don't show up in the browser.
  //e.stopPropagation();

};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky);
}

//Predict, then test...
//Q: What effect does the boolean arg have?
//   (Leave exactly 1 version uncommented to test...)
/*If the boolean arg is true, the capturing phase is used. If there isn't a boolean 
argument or the argument is set to false, the bubbling phase is used.
*/

table.addEventListener('click', clicky, true);
//table.addEventListener('click', clicky, false);

// Q: When user clicks on a cell, in what order will the pop-ups appear?
/*
If e.stopPropagation() isn't called in demo 3, the pop-ups move from the elements in <table> to the contents of the cell that 
the user clicked on and then outwards to the <tr> element that the cell the user clicked on is in. Moving from the elements 
in <table> to the <td> element (cell) is the capturing phase while moving from the cell to the <tr> element (row) is bubbling phase. 
*/