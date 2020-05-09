import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default class LoginRoute extends Route.extend(
  UnauthenticatedRouteMixin
) {
  // Defaults
  routeIfAlreadyAuthenticated = 'intern';
}