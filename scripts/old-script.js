const actionButton = document.querySelector('.button-add');
const sortButton = document.querySelector('.button-sort');
function createInput() {
  let newInput = document.createElement('div');
  newInput.classList.add('input-item');
  newInput.innerHTML = '<input class="todolist__input" placeholder="Введите задачу"><button class="close-inactive"></button>';
  newInput.querySelector('button').addEventListener('click', () => deleteInput(newInput))
  // else {newInput.querySelector('button').addEventListener('click', () => newInput.value ='')}
  document.querySelector('.todolist__input-block').append(newInput);
}


function deleteInput (ref) {
  if(document.querySelectorAll('.input-item').length > 1){
    ref.remove();
  }
  else {
    ref.querySelector('.todolist__input').value = ''
  }
}
function sortList() {
  let arr = [];
  for (let i = 0; i < document.querySelectorAll('.todolist__input').length; i++) {
    arr.push(document.querySelectorAll('.todolist__input')[i].value);
  }
  if (sortButton.name === 'desc') {
    arr.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    sortButton.name = 'asc';
    sortButton.style.backgroundImage = "url('../images/todolist-button-asc-inactive.svg')";
    sortButton.addEventListener('mouseover', (event) => {
      event.target.style.backgroundImage = "url('../images/todolist-button-asc-active.svg')";
    });
    sortButton.addEventListener('mouseout', (event) => {
      event.target.style.backgroundImage = "url('../images/todolist-button-asc-inactive.svg')";
    });
  }
  else {
    arr.sort((a, b) => {
      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      }
      return 0;
    });
    sortButton.name = 'desc';
    sortButton.style.backgroundImage = "url('../images/todolist-button-desc-inactive.svg')";
    sortButton.addEventListener('mouseover', (event) => {
      event.target.style.backgroundImage = "url('../images/todolist-button-desc-active.svg')";
    });
    sortButton.addEventListener('mouseout', (event) => {
      event.target.style.backgroundImage = "url('../images/todolist-button-desc-inactive.svg')";
    });
  }

  for (let i = 0; i < document.querySelectorAll('.todolist__input').length; i++) {
    document.querySelectorAll('.todolist__input')[i].value = arr[i];
  }

}
createInput();
actionButton.addEventListener('click', createInput); 
sortButton.addEventListener('click', sortList);
