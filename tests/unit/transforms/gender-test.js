import { module, test } from 'qunit';

import { setupTest } from 'my-ember-project/tests/helpers';

module('Unit | Transform | gender', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let transform = this.owner.lookup('transform:gender');
    assert.ok(transform);
  });
});
