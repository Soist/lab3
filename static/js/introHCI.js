'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(function(e) {
		console.log("project clicked");
    	//prevent the page from reloading
    	e.preventDefault();
    	//In an event handler, $(this) refers 
    	//to the object that triggers the event
    	$(this).css("background-color", "#7fff00");
    	$("#myimg").animate({"width":200},1000);
    })};

    //$("myelement").animate({"css-property":"value"}, durationInMilliseconds);
