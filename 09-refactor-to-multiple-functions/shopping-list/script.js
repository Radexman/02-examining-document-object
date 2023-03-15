// ====== 09 Refactor to multiple functions ===== //

// Clean & Performant

function createNewLi(item) {
	const li = document.createElement('li');
	const liText = document.createTextNode(item);
	li.appendChild(liText);

	const button = createButton('remove-item btn-link text-red');

	document.querySelector('.items').appendChild(li);
}

function createButton(classes) {
	const button = document.createElement('button');
	button.className = classes;

	const icon = createIcon('fa-solid fa-xmark');
	button.appendChild(icon);

	return button;
}

function createIcon(classes) {
	const icon = document.createElement('i');
	icon.className = classes;
	return icon;
}

createNewLi('Bread');
createNewLi('Eggs');
createNewLi('Pizza');
