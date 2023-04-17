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
	category.value = 0;
};

const addNote = () => {
	if (textArea.value !== '') {
		console.log('jest ok');
	} else {
		console.log('nie jest ok');
	}
};

addBtn.addEventListener('click', showPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);
