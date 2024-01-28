import { module, test } from 'qunit';
import { setupTest } from 'my-ember-project/tests/helpers';

module('Unit | Controller | clients/index', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:clients/index');
    assert.ok(controller);
  });
});
