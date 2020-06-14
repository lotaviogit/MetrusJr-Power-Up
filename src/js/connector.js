// Check if it's working
console.log("Hello Trello");

// Power up initializing
window.TrelloPowerUp.initialize({
	'card-badges': function(t, opts) {
		// Return an array of card badges
		// return [];
		return t.card('all')
		.then(function(card) {
			console.log(card);
			return [{
				text: card.idShort
			}];
		});
	}
});