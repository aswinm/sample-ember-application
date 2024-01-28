import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-ember-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | get-display-name', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', { name: 'Test', email: 'test@example.com' });

    await render(hbs`{{get-display-name this.inputValue}}`);
    assert.dom(this.element).hasText('Test <test@example.com>');

    await render(hbs`{{get-display-name}}`);
    assert.dom(this.element).hasText('');
  });
});
