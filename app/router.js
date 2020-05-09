import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('login');
  this.route('tool', function() {
    this.route('events', function() {
      this.route('index', { path: '/' });
      this.route('event', { path: ':event_id' });
      this.route('new');
    });
    this.route('artists', function() {
      this.route('index', { path: '/' });
      this.route('artist', { path: ':artist_id' });
      this.route('new');
    });
  });
});
