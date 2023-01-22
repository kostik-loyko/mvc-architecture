import Controller from './controller';

class View {
  root: HTMLElement;
  controller: Controller;

  title: HTMLElement;
  incremetButton: HTMLElement;
  dicrementButton: HTMLElement;
  myltiplyButton: HTMLElement;

  constructor() {
    this.root = document.body;
    this.controller = new Controller();

    this.title = document.createElement('h1');
    this.title.innerText = `Value: 0`;

    this.incremetButton = document.createElement('button');
    this.incremetButton.innerText = 'incremet';
    this.dicrementButton = document.createElement('button');
    this.dicrementButton.innerText = 'dicrement';
    this.myltiplyButton = document.createElement('button');
    this.myltiplyButton.innerText = 'myltiply';

    this.bindListener();
  }

  updateTitle(value: number) {
    return this.title.innerText = `Value: ${value}`;
  }

  incrementOnClick = () => {
    this.updateTitle(this.controller.getIncrement());
  }
  dicrementOnClick = () => {
    this.updateTitle(this.controller.getDicrement());
  }
  multiplyOnClick = () => {
    this.updateTitle(this.controller.getMultiply());
  }

  bindListener() {
    this.incremetButton.addEventListener('click', this.incrementOnClick);
    this.dicrementButton.addEventListener('click', this.dicrementOnClick);
    this.myltiplyButton.addEventListener('click', this.multiplyOnClick);
  }

  render() {
    this.root.append(this.title);
    this.root.append(this.incremetButton);
    this.root.append(this.dicrementButton);
    this.root.append(this.myltiplyButton);
  }
}

export default View;