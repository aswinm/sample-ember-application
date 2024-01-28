import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { later } from '@ember/runloop';

export default class ClientsViewRoute extends Route {
  @service store;
  queryParams = {
    sortBy: {
      refreshModel: false,
    },
    order: {
      refreshModel: true,
    },
  };

  model(params) {
    /* return [
      {
        id: 1,
        name: 'John',
        company_name: "John's Furniture",
        email: 'john@example.com',
        phone_number: '+91 98765 43210',
        active: true,
      },
      {
        id: 2,
        name: 'Robert',
        company_name: 'Smart Boutique',
        email: 'robert@example.com',
        phone_number: '+91 98764 53210',
        active: false,
      },
    ]; */
    return this.store.query('client', {});

    let client = this.store.createRecord('client', {
      name: 'Arjun',
      company_name: 'Modern Bakers',
      email: 'arjun@example.com',
      phone_number: '+91 9876543222',
      active: true,
    });
  }
}
