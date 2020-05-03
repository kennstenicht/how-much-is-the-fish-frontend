import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class SignInComponent extends Component {
  // Services
  @service flashMessages;
  @service session;


  // Actions
  @action
  signIn(event) {
    event.preventDefault();

    const credentials = {
      "auth": {
        "password": this.password,
        "email": this.email
      }
    };
    const authenticator = 'authenticator:jwt';

    this.session.authenticate(authenticator, credentials)
      .then(this._authenticated.bind(this))
      .catch(this._rejected.bind(this));
  }


  // Privat functions
  _authenticated() {
    const message = this.intl.t('signIn.successMessage');

    this.flashMessages.success(message);
  }

  _rejected(reason) {
    this.flashMessages.warning(reason.statusText);
  }
}
