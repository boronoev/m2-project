import { ORDER_NONE, ORDER_ASC, ORDER_DESC } from "./constants.js";

export default class TaskTrackerModel {
  tasks = [];

  order = ORDER_NONE
  
  add = (todo) => {
    this.tasks.push(todo)
    this.unorder()
    return this.tasks
  }

  remove = (id) => {
    if(this.tasks.length === 1) return false;

    this.tasks = this.tasks.filter(todo => todo.id !== id)
    this.unorder()
    return true
  }

  change = (id, text) => this.tasks.find(todo => id === todo.id).setText(text);
  

  sort = (order = this.order) => this.tasks.sort((a,b) => (a.text > b.text ? 1 : -1) * (this.isASC(order) || this.isNONE(order) ? 1 : -1));

  switchOrder = () => {
    this.order = this.reverseOrder(this.order);
    return this.sort(this.order);
  };

  reverseOrder = (order = this.order) => this.isASC(order) ? ORDER_DESC : ORDER_ASC;

  isASC = (order) => order === ORDER_ASC;

  isNONE = (order) => order === ORDER_NONE;

  unorder = () => this.order === ORDER_NONE;


}
