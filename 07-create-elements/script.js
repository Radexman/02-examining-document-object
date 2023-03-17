// =========== 07 Creating Elements ============ //
const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');
const text = document.createTextNode('My Div Element');
div.appendChild(text);

document.body.appendChild(div);
