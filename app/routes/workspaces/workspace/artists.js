import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class WorkspacesWorkspaceArtistsRoute extends Route {
  // Services
  @service store;


  // Hooks
  model() {
    let workspace = this.modelFor('workspaces.workspace');

    return workspace.artists;
  }
}
