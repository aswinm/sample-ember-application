import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'my-ember-project/tests/helpers';

module('Acceptance | clients', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /clients', async function (assert) {
    await visit('/clients');

    assert.strictEqual(currentURL(), '/clients');
  });
});
