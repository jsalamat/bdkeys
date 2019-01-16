// Keys and notes variables store the BD keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
// Looping through the elements of the keys array and pushing them to the notes array
// Passing in the elements by its class name
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})
//---------------------------------------------
// Functions that change the color of the keys below
let keyPlay = function(event) {
  event.target.style.backgroundColor = '#75ffe1';
}
// returns the background color of the keys to their default with an empty string '' when the mouse is released on the element
let keyReturn = function(event) {
  event.target.style.backgroundColor = '';
}
// --------------------------------------------