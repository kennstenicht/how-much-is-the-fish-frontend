import Route from '@ember/routing/route';

export default class WorkspacesWorkspaceSettingsRoute extends Route {
  // Hooks
  model() {
    return this.modelFor('workspaces.workspace');
  }
}
