const toggleButton = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');

const userInput = document.querySelector('.userInput');
const button = document.querySelector('button.description');
const p = document.querySelector('p.description');
let listItem = document.querySelectorAll('li');

const addItemInput = document.querySelector('.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

const listItems = document.getElementsByTagName('li');

toggleButton.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    listDiv.style.display = 'block';
    toggleButton.textContent = 'Hide list';
   } else {
    listDiv.style.display = 'none';
    toggleButton.textContent = 'Show list';
   }
});


addItemButton.addEventListener('click', () => {
    let list = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    let appendedItem = list.appendChild(li);
    addItemInput.value = '';
  });
  

