// ====== 09 Refactor to multiple functions ===== //

// Clean & Performant

const itemsList = document.querySelector('#item-list');

const createItemTwo = (item) => {
	const li = document.createElement('li');
	const liText = document.createTextNode(item);

	const button = createButton('remove-item btn-link text-red');

	li.appendChild(liText);
	li.appendChild(button);
	itemsList.appendChild(li);
};

const createButton = (classes) => {
	const button = document.createElement('button');
	button.className = classes;

	const icon = createIcon('fa-solid fa-xmark');
	button.appendChild(icon);

	return button;
};

const createIcon = (classes) => {
	const icon = document.createElement('i');
	icon.className = classes;
	return icon;
};

createItemTwo('Eggs');
createItemTwo('Orange juice');
