// ======== 08 innerHTML vs createElement ======= //

/* <li>
Apples
<button class="remove-item btn-link text-red">
<i class="fa-solid fa-xmark"></i>
</button>
</li> */

const itemsList = document.querySelector('#item-list');

// Quick & Dirty

const createItemOne = (item) => {
	const li = document.createElement('li');
	li.innerHTML = `${item}
		<button class="remove-item btn-link text-red">
		<i class="fa-solid fa-xmark"></i>
		</button>
	`;
	itemsList.appendChild(li);
};

createItemOne('Peanut butter');

// Clean & Performant

const createItemTwo = (item) => {
	const li = document.createElement('li');
	const liText = document.createTextNode(item);

	const button = document.createElement('button');
	button.className = 'remove-item btn-link text-red';

	const icon = document.createElement('i');
	icon.className = 'fa-solid fa-xmark';

	li.appendChild(liText);
	button.appendChild(icon);
	li.appendChild(button);
	itemsList.appendChild(li);
};

createItemTwo('Eggs');
createItemTwo('Orange juice');
