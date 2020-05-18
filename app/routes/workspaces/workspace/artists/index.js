import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class WorkspacesWorkspaceArtistsIndexRoute extends Route {
  // Services
  @service store;


  // Hooks
  model() {
    return this.modelFor('workspaces.workspace.artists');
  }

  setupController(controller, model) {
    super.setupController(controller, model);

    controller.workspace = this.modelFor('workspaces.workspace');
  }
}
