// ====== 05 Traversing the DOM elements ====== //

let output;

// Get child elements
const parent = document.querySelector('.parent');
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Chilt Three';

// Get parent elements from a child
const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #000000';
child.parentElement.style.padding = '5px 15px';

// Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;
secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color = 'blue';
secondItem.previousElementSibling.style.color = 'green';

console.log(output);
