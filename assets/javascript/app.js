// Keys and notes variables store the BD keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
// looping through the elements of the keys array and pushing them to the notes array
// passing in the elements by its class name
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})