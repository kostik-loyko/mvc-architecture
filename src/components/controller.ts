import Model from './model';

class Controller {
  model: Model;
  constructor() {
    this.model = new Model();
  }

  getIncrement() {
    return this.model.increment();
  }
  getDicrement() {
    return this.model.dicrement();
  }
  getMultiply() {
    return this.model.multiply();
  }
}

export default Controller;