import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { later } from '@ember/runloop';
import { action } from '@ember/object';

export default class ClientsViewRoute extends Route {
  @service router;

  @action
  loading(transition) {
    /*let controller = this.controllerFor('clients.view');
    controller.set('isLoading', true);
    transition.promise.finally(() => {
      controller.set('isLoading', false);
    }); */
    return true;
  }

  @action
  error(error, transition) {
    if (error.status == 404) {
      this.router.transitionTo('/fourohfour');
    }
    return true;
  }

  beforeModel(transition) {
    let clientId = transition.to.params.client_id;
    clientId = parseInt(clientId);
    if (isNaN(clientId)) {
      this.router.transitionTo('clients.index', {
        queryParams: { sortBy: 'name' },
      });
      // this.router.transitionTo('clients');
    }
  }

  @action
  willTransition(transition) {
    if (!self.controller.get('hasCompletedForm')) {
      transition.abort();
    } else if (self.controller.get('someOtherFlag')) {
      this.router.transitionTo('/some-other-route/');
    }
  }

  model(params) {
    return new Promise((resolve, reject) => {
      later(() => {
        console.log('Completing promise');
        let clientId = params.client_id;
        if (clientId === '1') {
          resolve({
            id: 1,
            name: 'John',
            company_name: "John's Furniture",
            email: 'john@example.com',
            phone_number: '+91 98765 43210',
            active: true,
          });
        } else if (clientId === '2') {
          resolve({
            id: 2,
            name: 'Robert',
            company_name: 'Smart Boutique',
            email: 'robert@example.com',
            phone_number: '+91 98764 53210',
            active: false,
          });
        } else {
          reject({ status: 404, detail: 'Client not found' });
        }
      }, 1500);
    });
  }

  afterModel(model) {
    console.log('In afterModel');
    if (!model.active) {
      this.router.transitionTo('clients');
    }
  }

  setupController(controller, model) {
    controller.set('testVar', 'Testing Var');
    this.controllerFor('clients').set('clientModuleTitle', model.name);
  }

  resetController(controller, isExiting, transition) {
    if (isExiting) {
      controller.set('isEditing', false);
    }
  }
}
