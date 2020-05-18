import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class WorkspacesWorkspaceEventsNewRoute extends Route {
  // Services
  @service store;


  // Hooks
  model() {
    return this.store.createRecord('event');
  }


  // Actions
  @action
  willTransition() {
    this.controller.model.rollbackAttributes();
  }
}
