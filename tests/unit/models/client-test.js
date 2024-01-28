import { module, test } from 'qunit';
import { get } from '@ember/object';

import { setupTest } from 'my-ember-project/tests/helpers';

module('Unit | Model | client', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('client', {});
    assert.ok(model);
  });

  test('displayTag test', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('client', {
      name: 'Test',
      email: 'test@example.com',
    });
    assert.equal(model.displayTag, 'Test <test@example.com>');
  });

  test('relationship test', function (assert) {
    let client = this.owner.lookup('service:store').modelFor('client');
    let clientRelationship = client.relationshipsByName.get('salesman');

    // Assert the name of the model field
    assert.equal(clientRelationship.key, 'salesman');

    // Assert the type of relationship
    assert.equal(clientRelationship.kind, 'belongsTo');
  });
});
