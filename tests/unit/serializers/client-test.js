import { module, test } from 'qunit';

import { setupTest } from 'my-ember-project/tests/helpers';

module('Unit | Serializer | client', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('client');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('client', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
