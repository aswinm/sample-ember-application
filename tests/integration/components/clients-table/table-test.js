import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-ember-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | clients-table/table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ClientsTable::Table />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ClientsTable::Table>
        template block text
      </ClientsTable::Table>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
