const elemOne = document.querySelector('#greet-div');
// This line uses the querySelector() method to find and select the first HTML element
// with an ID of 'greet-div' in the document (webpage)
// The selected element is then stored in the variable 'elemOne'

// This line prints the selected element to the browser's console
// It will show either the element that was found, or null if no element with that ID exists
console.log(elemOne);

elemOne.style.color = 'red';

/*
It doesn’t matter how many elements your selector matches; querySelector always returns the first element it finds. In the example below, document.querySelector('li') will return Gandalf.
*/

const name = document.querySelector('li');
console.log(name.innerText);

//selecting star wars character

const characters = document.querySelector('#star-wars-characters');
console.log(characters);