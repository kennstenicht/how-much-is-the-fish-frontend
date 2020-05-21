import Route from '@ember/routing/route';

export default class WorkspacesWorkspaceArtistsIndexRoute extends Route {
  // Hooks
  model() {
    return this.modelFor('workspaces.workspace.artists');
  }

  setupController(controller, model) {
    super.setupController(controller, model);

    controller.workspace = this.modelFor('workspaces.workspace');
  }
}
