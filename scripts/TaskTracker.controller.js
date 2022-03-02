import Task from "./Task.domain.js";
import TaskTrackerModel from "./TaskTracker.model.js";
import TaskTrackerView from "./TaskTracker.view.js";

export default class TaskTrackerController {
  model = new TaskTrackerModel()
  view = new TaskTrackerView()

  constructor() {
    
    this.view.onAdd = () => this.model.add(new Task(''))
    this.view.onRemove = (id) =>  this.model.remove(id)
    this.view.onChange = (id, text) => this.model.change(id, text)
    this.view.onSort = () => this.model.switchOrder();
    
    this.view.add(new Task(''))
  }
}
 