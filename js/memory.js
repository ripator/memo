document.addEventListener("DOMContentLoaded", function (event) {
	console.log("DOM is ready");
	const cards = document.querySelectorAll(".memory-card");

	let hasFlippedCard = false;
	let lockFlip = false;
	let firstCard, secondCard;

	function flipCard() {
		if (lockFlip) return;

		this.classList.add("flip");

		if (!hasFlippedCard) {
			hasFlippedCard = true;
			firstCard = this;
		} else {
			hasFlippedCard = false;
			secondCard = this;


			checkIfMatch();
		}
	}

	function checkIfMatch() {
		if (firstCard.dataset.framework === secondCard.dataset.framework) {
			firstCard.removeEventListener("click", flipCard);
			secondCard.removeEventListener("click", flipCard);
			
		} else {
			lockFlip = true;

			setTimeout(() => {
			firstCard.classList.remove("flip");
			secondCard.classList.remove("flip");		
			lockFlip = false;
			}, 1500);
			
		}		
	}

	(function mixAllCards() {
		cards.forEach(card => {
			let randomPlace = Math.floor(Math.random() * 16);
			card.style.order = randomPlace;
		});
	})(); 

	cards.forEach(card => card.addEventListener("click", flipCard));
});