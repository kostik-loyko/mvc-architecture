class Model {
  count: number;
  constructor() {
    this.count = 0;
  }

  increment() {
    return this.count += 1;
  }
  dicrement() {
    return this.count -= 1;
  }
  multiply() {
    return this.count *= 2;
  }
}

export default Model;