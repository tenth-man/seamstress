let card = document.getElementById('card');
let cardHolder = document.getElementsByClassName('card-holder');
let addBtn = document.getElementById('add-card-button');

addBtn.onclick = function() {
	let newCard = card.cloneNode(true);
	newCard.hidden = false;
	cardHolder[1].append(newCard);
};
