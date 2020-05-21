import Route from '@ember/routing/route';

export default class WorkspacesWorkspaceArtistsRoute extends Route {
  // Hooks
  model() {
    let workspace = this.modelFor('workspaces.workspace');

    return workspace.artists;
  }
}
