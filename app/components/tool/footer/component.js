import Component from '@glimmer/component';

export default class ToolFooterComponent extends Component {
  // Getter and setter
  get currentYear() {
    return new Date().getFullYear();
  }
}
