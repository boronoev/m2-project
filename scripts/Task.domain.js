export default class Task {
  text;
  id = Date.now();

  constructor(text) {
    this.text = text;
  }
  
  setText = (text) => this.text = text
}
