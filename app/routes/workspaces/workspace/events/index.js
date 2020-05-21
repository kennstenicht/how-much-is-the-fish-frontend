import Route from '@ember/routing/route';

export default class WorkspacesWorkspaceEventsIndexRoute extends Route {
  // Hooks
  model() {
    return this.modelFor('workspaces.workspace.events');
  }

  setupController(controller, model) {
    super.setupController(controller, model);

    controller.workspace = this.modelFor('workspaces.workspace');
  }
}
