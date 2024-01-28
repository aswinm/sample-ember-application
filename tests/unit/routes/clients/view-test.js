import { module, test } from 'qunit';
import { setupTest } from 'my-ember-project/tests/helpers';

module('Unit | Route | clients/view', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:clients/view');
    assert.ok(route);
  });
});
