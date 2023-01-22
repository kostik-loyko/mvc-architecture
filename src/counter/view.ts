import Controller from './controller';

class View {
  root: HTMLElement;
  controller: Controller;

  title: HTMLElement;
  buttonIncremet: HTMLElement;
  buttonDicremet: HTMLElement;
  buttonMultiply: HTMLElement;

  constructor() {
    this.root = document.body;
    this.controller = new Controller();

    this.title = document.createElement('h1');
    this.title.innerText = `Counter: 0`;

    this.buttonIncremet = document.createElement('button');
    this.buttonIncremet.innerText = 'Incremet';
    this.buttonDicremet = document.createElement('button');
    this.buttonDicremet.innerText = 'Dicremet';
    this.buttonMultiply = document.createElement('button');
    this.buttonMultiply.innerText = 'Multiply';

    this.bindListener();
  }



  onIncrementClick = () => {
    this.updateTitle(this.controller.getIncrement());
  }
  onDicrementClick = () => {
    this.updateTitle(this.controller.getDicrement());
  }
  onMultiplyClick = () => {
    this.updateTitle(this.controller.getMultiply());
  }

  bindListener() {
    this.buttonIncremet.addEventListener('click', this.onIncrementClick);
    this.buttonDicremet.addEventListener('click', this.onDicrementClick);
    this.buttonMultiply.addEventListener('click', this.onMultiplyClick);
  }

  updateTitle(value: number) {
    return this.title.innerText = `Counter: ${value}`;
  }

  render() {
    this.root.append(this.title);
    this.root.append(this.buttonIncremet);
    this.root.append(this.buttonDicremet);
    this.root.append(this.buttonMultiply);
  }
}

export default View;