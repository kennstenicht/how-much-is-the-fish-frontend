import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ToolHeaderComponent extends Component {
  // Services
  @service flashMessages;
}
