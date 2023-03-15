// ======== 08 innerHTML vs createElement ======= //

// Quick & Dirty

// function createListItem(item) {
// 	const li = document.createElement('li');
// 	li.innerHTML = `${item}
// 					<button class="remove-item btn-link text-red">
// 						<i class="fa-solid fa-xmark"></i>
// 					</button>`;
// 	document.querySelector('.items').appendChild(li);
// }

// createListItem('Eggs');

// Clean & Performant

// <li>
// 	Orange Juice
// 	<button class="remove-item btn-link text-red">
// 		<i class="fa-solid fa-xmark"></i>
// 	</button>
// </li>;

function createNewLi(item) {
	const li = document.createElement('li');
	const liText = document.createTextNode(item);
	li.appendChild(liText);

	const button = document.createElement('button');
	button.className = 'remove-item btn-link text-red';

	const icon = document.createElement('i');
	icon.className = 'fa-solid fa-xmark';
	button.appendChild(icon);
	li.appendChild(button);

	document.querySelector('.items').appendChild(li);
}

createNewLi('Bread');
createNewLi('Eggs');
