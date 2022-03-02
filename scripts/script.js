// const actionButton = document.querySelector('.button-add');
// class TodoItem {
//   constructor(id) {
//     this.id = id
//     this.value = ''
//     this.placeHolder = 'Введите значения'
//   }

import TaskTrackerController from "./TaskTracker.controller.js";

//   // setValue() {
//   //   this.value = newInput.value;
//   // }
// }

// class TodoList {
//   list = [new TodoItem(1)]
//   currentId = 2

//   addTodo() {
//     const newTodoItem = new TodoItem(this.currentId)
//     this.currentId++
//     this.list.push(newTodoItem)
//     this.render()
//   }

//   remove() {
//     newInput.querySelector('button').addEventListener('click', () => newInput.remove())
//   }

//   render() {
//     document.querySelector('.todolist__input-block').innerHTML = ''
//     this.list.forEach(todo => {
//       let newInput = document.createElement('div');
//       newInput.classList.add('input-item');
//       newInput.innerHTML = `<input class="todolist__input" placeholder="${todo.placeHolder}"><button class="close-inactive"></button>`;

//       document.querySelector('.todolist__input-block').append(newInput);
//     })
//   }
// }

// const todoList = new TodoList()
// todoList.render()

// actionButton.addEventListener('click', () => {
//   todoList.addTodo();
//   console.log(todoList);
// });

// document.querySelector('.close-inactive').addEventListener('click', ()
//   => {
//   todoList.remove();
//   console.log(todoList);
// });

// const actionButton = document.querySelector('.button-add');
// function createInput () {
//   let newInput = document.createElement('div');
//   newInput.classList.add('input-item');
//   newInput.innerHTML = '<input class="todolist__input" placeholder="Введите задачу"><button class="close-inactive"></button>';
//   newInput.querySelector('button').addEventListener('click', () => newInput.remove())
//   document.querySelector('.todolist__input-block').append(newInput);
// }
// createInput();
// actionButton.addEventListener('click', createInput);





// const actionButton = document.querySelector('.button-add');
// const sortButton = document.querySelector('.button-sort');
// function createInput() {
//   let newInput = document.createElement('div');
//   newInput.classList.add('input-item');
//   newInput.innerHTML = '<input class="todolist__input" placeholder="Введите задачу"><button class="close-inactive"></button>';
//   newInput.querySelector('button').addEventListener('click', () => newInput.remove())
//   document.querySelector('.todolist__input-block').append(newInput);
// }
// function sortList() {
//   let arr = [];
//   for (let i = 0; i < document.querySelectorAll('.todolist__input').length; i++) {
//     console.log(document.querySelectorAll('.todolist__input')[i].value);
//     arr.push(document.querySelectorAll('.todolist__input')[i].value);
//   }
//   if (sortButton.name === 'desc') {
//     arr.sort((a, b) => {
//       if (a < b) {
//         return -1;
//       }
//       if (a > b) {
//         return 1;
//       }
//       return 0;
//     });
//     sortButton.name = 'asc';
//     sortButton.style.backgroundImage = "url('../images/todolist-button-asc-inactive.svg')";
//     sortButton.addEventListener('mouseover', (event) => {
//       event.target.style.backgroundImage = "url('../images/todolist-button-asc-active.svg')";
//     });
//     sortButton.addEventListener('mouseout', (event) => {
//       event.target.style.backgroundImage = "url('../images/todolist-button-asc-inactive.svg')";
//     });
//   }
//   else {
//     arr.sort((a, b) => {
//       if (a > b) {
//         return -1;
//       }
//       if (a < b) {
//         return 1;
//       }
//       return 0;
//     });
//     sortButton.name = 'desc';
//     sortButton.style.backgroundImage = "url('../images/todolist-button-desc-inactive.svg')";
//     sortButton.addEventListener('mouseover', (event) => {
//       event.target.style.backgroundImage = "url('../images/todolist-button-desc-active.svg')";
//     });
//     sortButton.addEventListener('mouseout', (event) => {
//       event.target.style.backgroundImage = "url('../images/todolist-button-desc-inactive.svg')";
//     });
//   }

//   for (let i = 0; i < document.querySelectorAll('.todolist__input').length; i++) {
//     document.querySelectorAll('.todolist__input')[i].value = arr[i];
//   }
// }
// createInput();
// actionButton.addEventListener('click', createInput); 
// sortButton.addEventListener('click', sortList);

const taskTracker = new TaskTrackerController();
