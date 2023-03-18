// =========== 11 Replace Elements =========== //

// function replaceFirstItem() {
// 	const firstItem = document.querySelector('li');
// 	const li = document.createElement('li');
// 	li.textContent = 'Replaced First';
// 	firstItem.replaceWith(li);
// }

// replaceFirstItem();

// function replaceSecondItem() {
// 	const secondItem = document.querySelector('li:nth-child(2)');
// 	secondItem.outerHTML = '<li>Replaced Second</l1>';
// }

// replaceSecondItem();

// const allElements = document.querySelectorAll('li');

// function replaceAll(array) {
// 	array.forEach((item, index) => {
// 		const li = document.createElement('li');
// 		li.textContent = `Replaced All Elements! ${index}`;
// 		item.replaceWith(li);
// 	});
// }

// replaceAll(allElements);

// function replaceChildHeading() {
// 	const header = document.querySelector('header');
// 	const h1 = document.querySelector('h1');
// 	const h2 = document.createElement('h2');
// 	h2.id = 'app-title';
// 	h2.textContent = 'New Heading';
// 	header.replaceChild(h2, h1);
// }

// replaceChildHeading();

const replaceWith = () => {
	const firstItem = document.querySelector('li');
	const li = document.createElement('li');
	const liText = document.createTextNode('Replaced First');
	li.appendChild(liText);
	firstItem.replaceWith(li);
};

replaceWith();

const replaceHTML = () => {
	const secondItem = document.querySelector('li:nth-child(2)');
	secondItem.outerHTML = '<li>Replaced Second</li>';
};

replaceHTML();

const list = document.querySelectorAll('li');
list.forEach((item, index) => {
	const li = document.createElement('li');
	const liText = document.createTextNode(`Replaced Item ${index + 1}`);
	li.appendChild(liText);
	item.replaceWith(li);
});

const replaceHeading = () => {
	const header = document.querySelector('header');
	const h1 = document.querySelector('h1');
	const h2 = document.createElement('h2');
	const h2Text = document.createTextNode('Second Heading');
	h2.appendChild(h2Text);
	h2.setAttribute('title', 'Second Heading');
	header.replaceChild(h2, h1);
};

replaceHeading();
