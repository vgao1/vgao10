/*
Team DVD (Victoria Gao, Dean Carey)
SoftDev pd0
K28 -- Bubble Bubble Toil Trouble
2021-05-11
*/
// demo 1
// JS event propagation

var tds = document.getElementsByTagName('td');

var clicky = function(e) {
  alert( this.innerHTML );
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}
