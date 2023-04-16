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

const showPanel = () => {
	notePanel.style.display = 'flex';
};

const closePanel = () => {
	notePanel.style.display = 'none';
};

addBtn.addEventListener('click', showPanel);
cancelBtn.addEventListener('click', closePanel);
