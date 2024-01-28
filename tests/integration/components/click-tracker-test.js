import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-ember-project/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | click-tracker', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ClickTracker />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ClickTracker>
        template block text
      </ClickTracker>
    `);

    assert.dom(this.element).hasText('template block text');
  });

  test('increment count', async function (assert) {
    await render(hbs`<ClickTracker />`);
    assert.dom('.count').hasText('Count: 0');
    assert.dom('.multiplied-count').hasText('Multiplied Count: 0');
    await click('.btn-primary');
    assert.dom('.count').hasText('Count: 1');
    assert.dom('.multiplied-count').hasText('Multiplied Count: 2');

    await click('.btn-success');
    assert.dom('.count').hasText('Count: 3');
    assert.dom('.multiplied-count').hasText('Multiplied Count: 6');
  });
});
