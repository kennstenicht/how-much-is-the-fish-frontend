import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { pluralize } from 'ember-inflector';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default class ToolRoute extends Route.extend(
  AuthenticatedRouteMixin
) {
  // Services
  @service currentUser;
  @service flashMessages;
  @service intl;
  @service session;


  // Hooks
  model() {
    return this.currentUser.user.workspaces;
  }


  // Actions
  @action
  save(model, event) {
    event.preventDefault();

    const isNew = model.isNew;

    model.save().then((model) => {
      const message = this.intl.t('admin.saveRecord', {
        title: model.displayLabel
      });

      this.flashMessages.success(message);

      if (isNew) {
        this.transitionToByModel(model, true);
      }
    }).catch(function(e) {
      console.log(e.message);
    });
  }

  @action
  delete(model) {
    model.destroyRecord().then(() => {
      const message = this.intl.t('admin.deleteRecord', {
        title: model.title
      });

      this.flashMessages.success(message);
      this.transitionToByModel(model);
    })
  }

  @action
  cancel(model) {
    this.transitionToByModel(model);
  }

  @action
  reorderItems(itemModels, draggedModel) {
    const routeName = pluralize(draggedModel.constructor.modelName);
    const controller = this.controllerFor(`workspaces.workspace.${routeName}.index`);

    itemModels.forEach((record, index) => {
      record.position = index;
      record.save();
    });

    controller.records = itemModels;
  }


  // Functions
  transitionToByModel(model, single) {
    let modelName = model.constructor.modelName;
    let indexRoute = pluralize(modelName);
    let path = [];

    if (modelName != 'workspace') {
      path.push('workspaces.workspace');
    }

    path.push(indexRoute);

    if (single) {
      path.push(modelName);

      return this.transitionTo(path.join('.'), model);
    }

    return this.transitionTo(path.join('.'));
  }
}
