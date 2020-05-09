import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default class ApplicationRoute extends Route.extend(
  ApplicationRouteMixin,
) {
  // Services
  @service intl;
  @service moment;
  @service session;


  // Defaults
  routeAfterAuthentication = 'intern';


  // Hooks
  beforeModel() {
    this.moment.setLocale('de');
    this.intl.setLocale('de');
  }


  // Actions
  @action
  invalidateSession() {
    this.session.invalidate();
  }
}
