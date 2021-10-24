// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
let textToSpeak = 'This is the text string that you will generate with your script';

//Declaring and initializing variables.
const speakButton = document.querySelector('#button');
const speakButton1 = document.querySelector('#button1');
const speakButton2 = document.querySelector('#button2');
const speakButton3 = document.querySelector('#button3');
const speakButton4 = document.querySelector('#button4');
const speakButton5 = document.querySelector('#button5');

//Declaring and initializing arrays and storing information in the variables.
var array1 = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
var array2 = [' sat on', ' ate', ' danced with', ' saw', ' dosen\'t like', ' kissed'];
var array3 = [' a funny', ' a scary', ' a goofy', ' a slimy', ' a barking', ' a fat'];
var array4 = [' goat', ' monkey', ' fish', ' cow', ' frog', ' bug', ' worm'];
var array5 = [' on the moon', ' on the chair', ' in my spaghetti', ' in my soup', ' on the grass', ' in my shoes'];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/*if you call this function and pass it an array, it will return one of the elements of that array randomly */
function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];
}


//Random value from the array1 for button1
	var firstArrayButton1 = randomValueFromArray(array1);

	// console.log(firstArrayButton1);

	//Random value from the array2 for button2
	var secondArrayButton2 = randomValueFromArray(array2);

	// console.log(secondArrayButton2);

	//Random value from the array3 for button3
	var thirdArrayButton3 = randomValueFromArray(array3);

	// console.log(thirdArrayButton3);

//Random value from the array4 for button4
	var fourthArrayButton4 = randomValueFromArray(array4);

	// console.log(fourthArrayButton4);

	//Random value from the array5 for button5
	var fifthArrayButton5 = randomValueFromArray(array5);

	// console.log(fifthArrayButton5);

//Updating the variable textToSpeak and storing the concatened string in the variable.
textToSpeak = firstArrayButton1 + secondArrayButton2 + thirdArrayButton3 + fourthArrayButton4 + fifthArrayButton5;


/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above variable textToSpeak
speakButton.onclick = function() {
	speakNow(textToSpeak);
}

// Onclick handler for the button that speaks the text contained in the above variable firstArrayButton1
speakButton1.onclick = function() {
	speakNow(firstArrayButton1);
}

// Onclick handler for the button that speaks the text contained in the above variable secondArrayButton2
speakButton2.onclick = function() {
	speakNow(secondArrayButton2);
}

// Onclick handler for the button that speaks the text contained in the above variable thirdArrayButton3
speakButton3.onclick = function() {
	speakNow(thirdArrayButton3);
}

// Onclick handler for the button that speaks the text contained in the above variable fourthArrayButton4
speakButton4.onclick = function() {
	speakNow(fourthArrayButton4);
}

// Onclick handler for the button that speaks the text contained in the above variable fifthArrayButton5
speakButton5.onclick = function() {
	speakNow(fifthArrayButton5);
}
