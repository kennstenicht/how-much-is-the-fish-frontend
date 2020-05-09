import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ToolEventsEventRoute extends Route {
  // Services
  @service store;


  // Hooks
  model({ event_id }) {
    return this.store.findRecord('event', event_id);
  }


  // Actions
  @action
  willTransition() {
    this.controller.model.rollbackAttributes();
  }
}
