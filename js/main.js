const addBtn = document.querySelector('.menu__bottons__add');
const deleteAllBtn = document.getElementsByClassName('menu__bottons__delete');
const saveBtn = document.querySelector('.panel__buttons__save');
const cancelBtn = document.querySelector('.panel__buttons__cancel');
const deleteBtn = document.querySelector('.notes__note__header__delete');

const noteArea = document.querySelector('.notes');
const notePanel = document.querySelector('.panel');
const textArea = document.querySelector('#text');
const category = document.querySelector('#category');
const error = document.querySelector('.panel__error');
let selectedValue;
let cardId = 0;

const showPanel = () => {
	notePanel.style.display = 'flex';
};

const closePanel = () => {
	notePanel.style.display = 'none';
	error.style.visibility = 'hidden';
	textArea.value = '';
	category.selectedIndex = '0';
};

const addNote = () => {
	if (
		textArea.value !== '' &&
		category.options[category.selectedIndex].value != '0'
	) {
		error.style.visibility = 'hidden';
		createNote();
		closePanel();
	} else {
		error.style.visibility = 'visible';
	}
};

const createNote = () => {
	const newNote = document.createElement('div');
	newNote.classList.add('notes__note');
	newNote.setAttribute('id', cardId);
	newNote.innerHTML = `<div class="notes__note__header">

<h3 class="notes__note__header__title">${selectedValue}</h3>
<button class="notes__note__header__delete"><i class="fas fa-times"></i></button>
</div>
<div class="notes__note__body">
${textArea.value}
</div>
</div>`;
	noteArea.appendChild(newNote);
	cardId++;
};

const selecteValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
};

addBtn.addEventListener('click', showPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);
