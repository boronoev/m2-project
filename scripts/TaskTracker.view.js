export default class TaskTrackerView {
  container = document.querySelector('.todolist__input-block');
  addButton = document.querySelector('.button-add');
  sortButton = document.querySelector('.button-sort');

  onAdd;
  onSort;
  onRemove;
  onChange;

  constructor(){
    this.addButton.addEventListener('click', () => this.render(this.onAdd()))
    this.sortButton.addEventListener('click', () => this.render(this.onSort()) )
  }

  clear = () => this.container.innerHTML = '';

  add = (todo) => {
    this.container.append(this.createTask(todo))
    this.onAdd()
  }

  render = (tasks) => {
    this.clear();
    this.container.append(...tasks.map(task => this.createTask(task)))
  }


  createTask = (todo, placeholder = 'Введите задачу') => {
    let container = document.createElement('div');
    let input = document.createElement('input');
    let button = document.createElement('button');


    input.addEventListener('input', () => this.onChange(todo.id, input.value))

    button.addEventListener('click', () => {
      const isRemoved = this.onRemove(todo.id);

      if(!isRemoved) return

      container.remove();
    })

    container.classList.add('input-item');
    input.classList.add('todolist__input');
    button.classList.add('close-inactive');

    input.value = todo.text;
    input.placeholder = placeholder;

    container.append(input, button);

    return container;
  }
}
