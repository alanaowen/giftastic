$(document).ready(function() {

var dogBreed = ['Great Dane', 'Boxer', 'Australian Shepherd', 'Bichon Frise', 'Labrador Retriever', 'Beagle', 'Poodle', 'Bulldog', 'Siberian Husky', 'Chihuahua', 'Vizsla', 'Yorkshire Terrier', 'Greyhound', 'Pomeranian', 'Newfoundland', 'English Pointer', 'Bull Terrier'];
var currentGif;
var pausedGif;
var animatedGif;
var stillGif;

// Function for displaying dog data
function createButtons() {
	// Deleting dog buttons prior to adding new buttons
	$('#dogButtons').empty();
	// Looping through array of dog breeds
	for (var i = 0; i < dogBreed.length; i++) {
		// Dynamically generate buttons for each dog in the array
		var dogBtn = $('<button').text(dogBreed[i]).addClass('dogBtn').attr({'data-name': dogBreed[i]});
		// Adding button to the HTML
		$('#dogButtons').append(dogBtn);
	}
  }
//display gifs with click button
// Function handles click events
	$('.dogBtn').on('click', function(event) {
		$('.display').empty();
	})
})