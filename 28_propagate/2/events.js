/*
Team DVD (Victoria Gao, Dean Carey)
SoftDev pd0
K28 -- Bubble Bubble Toil Trouble
2021-05-11
*/

// demo 2
// JS event propagation

var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];

var clicky = function(e) {
  alert( this.innerHTML );
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky);
}

table.addEventListener('click', clicky);


// Q: When user clicks on a cell, in what order will the pop-ups appear?
/*For demo 2, the pop-ups moving from the inner-most elements to the outer-most elements is the bubbling phase. 
First, the pop-up shows the contents of the cell that the user clicked on. Then, the browser moves on to the next immediate ancestor 
element and the pop-up displays the HTML tags in the <tr> element containing the cell that the user clicked on. The browser continues 
moving to ancestor elements until it reaches the <table> element. 
The pop-ups moving from the inner-most elements to the outer-most elements is the bubbling phase.
*/