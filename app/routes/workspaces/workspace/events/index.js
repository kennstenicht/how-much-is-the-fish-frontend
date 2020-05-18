import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class WorkspacesWorkspaceEventsIndexRoute extends Route {
  // Services
  @service store;


  // Hooks
  model() {
    return this.modelFor('workspaces.workspace.events');
  }

  setupController(controller, model) {
    super.setupController(controller, model);

    controller.workspace = this.modelFor('workspaces.workspace');
  }
}
