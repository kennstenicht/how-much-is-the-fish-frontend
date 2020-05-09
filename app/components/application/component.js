import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationComponent extends Component {
  // Services
  @service fastboot;
  @service router;
  @service session;


  // Defaults
  @tracked showCookieNotice = false;


  // Getter and setter
  get urlSegments() {
    let routes = this.router
      .currentURL
      .substring(1)
      .split('/')
      .filter(n => n);


    return `${routes[0]}`;
  }


  // Hooks
  constructor() {
    super(...arguments);

    if (!this.fastboot.isFastBoot) {
      window.addEventListener('hashchange', this.checkHash.bind(this));
    }
  }

  willDestroy() {
    if (!this.fastboot.isFastBoot) {
      window.removeEventListener('hashchange', this.checkHash.bind(this));
    }
  }


  // Actions
  @action
  toggleCookieNotice() {
    this.showCookieNotice = !this.showCookieNotice;
  }


  // Functions
  checkHash() {
    if (location.hash == '#change-cookie-settings') {
      this.toggleCookieNotice();

      location.hash = ''
    }
  }
}