import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'my-ember-project/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | clients/view', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /clients/view', async function (assert) {
    await visit('/clients/1');

    assert.strictEqual(currentURL(), '/clients/1');
  });

  test('visiting inactive client', async function (assert) {
    await visit('/clients/2');

    assert.strictEqual(currentURL(), '/clients');

  });
});
