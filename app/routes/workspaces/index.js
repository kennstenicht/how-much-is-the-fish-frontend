
import Route from '@ember/routing/route';

export default class WorkspacesIndexRoute extends Route {
  // Hooks
  model() {
    return this.modelFor('workspaces');
  }

  redirect(model) {
    if (model) {
      this.transitionTo('workspaces.workspace', model.firstObject);
    } else {
      this.transitionTo('workspaces.new');
    }
  }
}
