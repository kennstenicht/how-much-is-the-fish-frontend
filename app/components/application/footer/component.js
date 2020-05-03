import Component from '@glimmer/component';

export default class ApplicationFooterComponent extends Component {
  // Getter and setter
  get currentYear() {
    return new Date().getFullYear();
  }
}
