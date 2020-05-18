
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class WorkspacesWorkspaceRoute extends Route {
  // Services
  @service store;


  // Hooks
  model({ workspace_id }) {
    return this.store.findRecord('workspace', workspace_id);
  }
}
