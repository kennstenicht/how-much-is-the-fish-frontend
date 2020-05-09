import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ToolArtistsRoute extends Route {
  // Services
  @service store;


  // Hooks
  model() {
    return this.store.findAll('artist');
  }
}
