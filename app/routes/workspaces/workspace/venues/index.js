import Route from '@ember/routing/route';

export default class WorkspacesWorkspaceVenuesIndexRoute extends Route {
  // Hooks
  model() {
    return this.modelFor('workspaces.workspace.venues');
  }

  setupController(controller, model) {
    super.setupController(controller, model);

    controller.workspace = this.modelFor('workspaces.workspace');
  }
}
