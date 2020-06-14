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
	},
	'card-badges': function(t, opts) {
		// Return an array of card badges
		// return [];
		return t.card('labels')
		.then(function(card) {
			console.log(card);
			if (card.labels) {
				return [{
					text: card.labels[0].toString()
				}];
			}
		});
	},
	'card-buttons': function(t, opts) {
		return [{
			icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
			text: 'Estimate Size',
			callback: function(t) {
				return t.popup({
					title: "Estimation",
					url: 'snake.html'
				});
			}
		}];
	},
});