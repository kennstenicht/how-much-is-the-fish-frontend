import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ToolArtistsArtistRoute extends Route {
  // Services
  @service store;


  // Hooks
  model({ artist_id }) {
    return this.store.findRecord('artist', artist_id);
  }


  // Actions
  @action
  willTransition() {
    this.controller.model.rollbackAttributes();
  }
}
