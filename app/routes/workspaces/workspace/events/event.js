import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class WorkspacesWorkspaceEventsEventRoute extends Route {
  // Services
  @service store;


  // Hooks
  model({ event_id }) {
    return this.store.findRecord('event', event_id);
  }
}
