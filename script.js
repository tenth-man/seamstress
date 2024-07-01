let addBtn = document.getElementById('add-box-button');
let container = document.getElementById('container');
let wrapper = document.querySelectorAll('.wrapper');
//let box = document.getElementById('box');
let box = document.createElement('div');
box.setAttribute('id','box');


function minCh (parNode) {
	let newMass = [];
	for(let elem of parNode.children) {
		newMass.push(elem.children.length);
	}
	//console.log(newMass);
	return newMass.indexOf(Math.min(...newMass));
}

addBtn.onclick = function() {
	console.log(minCh(container));
	
	//box.cloneNode(true);
	//wrapper[minCh].append(newBox);
	//container.children[minCh].append(newBox);
	
};
