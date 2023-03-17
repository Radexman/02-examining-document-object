// ===== 10 Insert Elements, Text & HTML ===== //

// insertAdjecentElement Example
const insertElement = () => {
	const filter = document.querySelector('.filter');
	const h1 = document.createElement('h1');
	h1.textContent = 'insertAdjecentElement';
	filter.insertAdjacentElement('afterend', h1);
};

insertElement();

// insertAdjecentText Example
const insertText = () => {
	const item = document.querySelector('li');
	item.insertAdjacentText('afterend', 'insertAdjecentText');
};

insertText();

//  insertAdjecentHTML Example
const insertHTML = () => {
	const clear = document.querySelector('#clear');
	clear.insertAdjacentHTML('afterend', '<p>insertAdjecentHTML</p>');
};

insertHTML();

// insertBefore Example

const insertBefore = () => {
	const list = document.querySelector('#item-list');
	const li = document.createElement('li');
	li.textContent = 'insertBefore';
	const thirdItem = document.querySelector('li:nth-child(3)');
	list.insertBefore(li, thirdItem);
};

insertBefore();

/*
<!-- beforebegin -->
<p>
	<!-- afterbegin -->
	foo
	<!-- beforeend --?
</p>
<!-- afterend -->
*/
