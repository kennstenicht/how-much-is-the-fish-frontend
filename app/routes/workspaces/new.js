import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class WorkspacesNewRoute extends Route {
  // Services
  @service store;
  @service currentUser;


  // Hooks
  model() {
    let workspace = this.store.createRecord('workspace');

    // Add current user to workspace
    workspace.users.pushObject(this.currentUser.user);

    return workspace;
  }


  // Actions
  @action
  willTransition() {
    this.controller.model.rollbackAttributes();
  }
}
