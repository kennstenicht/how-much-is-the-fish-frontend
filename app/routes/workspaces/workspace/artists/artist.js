import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class WorkspacesWorkspaceArtistsArtistRoute extends Route {
  // Services
  @service store;


  // Hooks
  model({ artist_id }) {
    return this.store.findRecord('artist', artist_id);
  }
}
