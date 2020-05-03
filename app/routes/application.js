import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default class ApplicationRoute extends Route.extend(
  ApplicationRouteMixin,
) {
  // Services
  @service intl;
  @service moment;


  // Defaults
  routeAfterAuthentication = 'application';
  routeIfAlreadyAuthenticated = 'application';


  // Hooks
  beforeModel() {
    this.moment.setLocale('de');
    this.intl.setLocale('de');
  }
}
