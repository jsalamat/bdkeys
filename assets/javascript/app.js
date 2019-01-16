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
const keyPlay = function(event) {
  event.target.style.backgroundColor = '#75ffe1';
}
// returns the background color of the keys to their default with an empty string '' when the mouse is released on the element
const keyReturn = function(event) {
  event.target.style.backgroundColor = '';
}
// --------------------------------------------
// Loop that runs the array elements through the function
  //*** you can't just assign it to equal keyPlay
  // wrong-> note.onmousedown = keyPlay 
  // because it would just redefined the function here
  // instead passed in anonymous function that has an event that triggers the function keyPlay
const  eventAssignment = function(note) {
	note.onmousedown = function() {
		keyPlay(event);
	}
	note.onmouseup = function() {
		keyReturn(event);
	}
};

// Loop that runs the array elements through the function
notes.forEach(eventAssignment);
// --------------------------------------------
// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');
