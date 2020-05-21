import Route from '@ember/routing/route';

export default class WorkspacesWorkspaceVenuesRoute extends Route {
  // Hooks
  model() {
    let workspace = this.modelFor('workspaces.workspace');

    return workspace.venues;
  }
}
