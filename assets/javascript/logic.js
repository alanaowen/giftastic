// Initial array of dog breeds
var dogBreed = ['Great Dane', 'Bulldog', 'Australian Shepherd', 'Beagle', 'Greyhound', 'Labrador Retriever', 'Mutt', 'German Shepherd', 'Vizsla', 'Poodle', 'Miniature Pinscher', 'Afghan Hound', 'Siberian Husky'];
var currentGif; 
var pausedGif; 
var animatedGif; 
var stillGif;

// Function for displaying dog data and create buttons
function createButtons(){
	// Deleting dog buttons prior to adding new buttons
	$('#dogButtons').empty();
	// Looping through array of dog breeds
	for(var i = 0; i < dogBreed.length; i++){
		// Dynamically generate buttons for each dog in the array
		var dogBtn = $('<button>');
		// Adding button text
		dogBtn.text(dogBreed[i]);
		// Adding a class of dogBtn to our button
		dogBtn.addClass('dogBtn');
		// Adding a data-attribute
		dogBtn.attr({'data-name': dogBreed[i]});
		// Adding button to the HTML
		$('#dogButtons').append(dogBtn);
	}

	// Function handles click events and displays gifs
	$('.dogBtn').on('click', function(){
		$('.display').empty();

		var thisDog = $(this).data('name');
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=dog+breed+" + thisDog + "&limit=10&api_key=dc6zaTOxFJmzC";
		// Perform Ajaz to GET request
		$.ajax({
			url: queryURL, 
			method: 'GET'
		})
		// After data comes back from API
		.done(function(query){
			// Storing array of results
			currentGif = query.data;
			$.each(currentGif, function(index,value){
				animatedGif= value.images.original.url;
				pausedGif = value.images.original_still.url;

				var thisRating = value.rating;
				//gives blank ratings 'unrated' text
				if(thisRating == '') {
					thisRating = 'unrated';
				}
				var rating = $('<h5>').html('Rated: '+thisRating)
				rating.addClass('ratingStyle');

				stillGif= $('<img>');
				stillGif.attr('data-animated', animatedGif);
				stillGif.attr('data-paused', pausedGif);
				stillGif.attr('src', pausedGif);
				stillGif.addClass('hover');

				var fullGifDisplay = $('<button>').append(rating, stillGif);
				$('.display').append(fullGifDisplay);
			});
		});
	});
}

// Animates and pauses gif on hover
$(document).on('mouseover','.hover', function(){
 	   	$(this).attr('src', $(this).data('animated'));
 });
 $(document).on('mouseleave','.hover', function(){
 	   	$(this).attr('src', $(this).data('paused'));
 });

// Sets a button from input
$('#addDog').on('click', function(){
	var newDog = $('#newDogInput').val().trim();
	dogBreed.push(newDog);
	createButtons();
	return false;
});

createButtons();