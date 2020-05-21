import Route from '@ember/routing/route';

export default class WorkspacesWorkspaceEventsRoute extends Route {
  // Hooks
  model() {
    let workspace = this.modelFor('workspaces.workspace');

    return workspace.events;
  }
}
