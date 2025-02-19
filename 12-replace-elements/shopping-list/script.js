// ========= 11 Custom insertAfter() ========= //

const insertAfter = (newEl, existingEl) => {
	existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
};

const li = document.createElement('li');
li.textContent = 'Insert Me After!';
const firstItem = document.querySelector('li');

insertAfter(li, firstItem);
