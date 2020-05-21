import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class WorkspacesWorkspaceVenuesVenueRoute extends Route {
  // Services
  @service store;


  // Hooks
  model({ venue_id }) {
    return this.store.findRecord('venue', venue_id);
  }
}
