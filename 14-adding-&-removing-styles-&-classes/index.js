// == 14 Adding & Removing Styles & Classes == //

const text = document.querySelector('.card');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');
const button = document.querySelector('button');

const run = () => {
	// className
	// console.log(itemList.className);
	// text.className = 'card dark';
	// classList
	// console.log(itemList.classList);
	// itemList.classList.forEach((c) => console.log(c));
	// text.classList.add('dark');
	// text.classList.remove('card');
	// text.classList.toggle('hidden');
	// text.classList.replace('card', 'dark');
	// Change style
	// itemList.style.lineHeight = '3.5';
	items.forEach((item, index) => {
		item.style.color = 'red';
		if (index === 2) {
			item.style.color = 'blue';
		}
	});
};

button.addEventListener('click', run);
