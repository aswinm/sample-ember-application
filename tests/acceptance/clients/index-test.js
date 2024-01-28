import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'my-ember-project/tests/helpers';

module('Acceptance | clients/index', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /clients/index', async function (assert) {
    await visit('/clients/index');

    assert.strictEqual(currentURL(), '/clients/index');
  });
});
