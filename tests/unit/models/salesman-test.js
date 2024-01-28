import { module, test } from 'qunit';
import { get } from '@ember/object';

import { setupTest } from 'my-ember-project/tests/helpers';

module('Unit | Model | salesman', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('salesman', {});
    assert.ok(model);
  });

  test('relationship test', function (assert) {
    let salesman = this.owner.lookup('service:store').modelFor('salesman');
    let salesmanRelationship = salesman.relationshipsByName.get('clients');

    assert.equal(salesmanRelationship.key, 'clients');

    // Assert the type of relationship
    assert.equal(salesmanRelationship.kind, 'hasMany');
  });
});
