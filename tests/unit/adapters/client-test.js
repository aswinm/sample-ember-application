import { module, test } from 'qunit';

import { setupTest } from 'my-ember-project/tests/helpers';

module('Unit | Adapter | client', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:client');
    assert.ok(adapter);
  });
});
