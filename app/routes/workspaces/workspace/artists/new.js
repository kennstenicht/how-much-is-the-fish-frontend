import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class WorkspacesWorkspaceArtistsNewRoute extends Route {
  // Services
  @service store;


  // Hooks
  model() {
    return this.store.createRecord('artist');
  }


  // Actions
  @action
  willTransition() {
    this.controller.model.rollbackAttributes();
  }
}
