// Check if it's working
console.log("Hello Trello");

// Power up initializing
window.TrelloPowerUp.initialize({
	'card-badges': function(t, opts) {
		// Return an array of card badges
		return [];
	}
});