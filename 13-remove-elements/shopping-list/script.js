// =========== 13 Remove Elements ============ //

// function removeClear() {
// 	const clearBtn = document.querySelector('#clear');
// 	clearBtn.remove();
// }

// removeClear();

// function removeFirstItem() {
// 	const list = document.querySelector('.items');
// 	const firstItem = list.querySelector('li:first-child');
// 	list.removeChild(firstItem);
// }

// removeFirstItem();

// const items = document.querySelectorAll('li');

// function removeItem(itemNum, array) {
// 	array.forEach((item, index) => {
// 		if (itemNum === index) {
// 			item.remove();
// 		}
// 	});
// }

// removeItem(1, items);

// function removeItem(itemNumber) {
// 	const ul = document.querySelector('ul');
// 	const li = document.querySelector(`li:nth-child(${itemNumber})`);
// 	ul.removeChild(li);
// }

// removeItem(2);

// function removeItemTwo(itemNumber) {
// 	const ul = document.querySelector('ul');
// 	const li = document.querySelectorAll('li')[itemNumber - 1];
// 	ul.removeChild(li);
// }

// removeItemTwo(1);

// function removeItemThree(itemNumber) {
// 	const li = document.querySelectorAll('li');
// 	li[itemNumber - 1].remove();
// }

// removeItemThree(1);

// const removeItemFour = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove;

// removeFirstItem(1);

const clearBtn = document.querySelector('#clear');
clearBtn.remove();

const removeItem = () => {
	const ul = document.querySelector('ul');
	const li = document.querySelector('li:first-child');
	ul.removeChild(li);
};

removeItem();

function removeListItem(itemNumber) {
	const ul = document.querySelector('ul');
	const li = document.querySelectorAll('li')[itemNumber - 1];
	ul.removeChild(li);
}

removeListItem(1);
