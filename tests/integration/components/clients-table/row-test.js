import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-ember-project/tests/helpers';
import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | clients-table/row', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('client', { name: 'Test', email: 'test@example.com' });

    await render(hbs`<ClientsTable::Row @client={{this.client}} />`);

    assert
      .dom(this.element)
      .hasText('Test <test@example.com> (Inactive) - - View | Edit | Delete');
  });

  test('row background test', async function (assert) {
    this.set('client', {
      name: 'Test',
      email: 'test@example.com',
      active: false,
      id: 1,
    });
    await render(hbs`<ClientsTable::Row @client={{this.client}} />`);
    assert.dom('.my-custom-class').hasClass('bg-gray');

    this.set('client', {
      name: 'Test',
      email: 'test@example.com',
      active: true,
      id: 1,
    });
    await render(hbs`<ClientsTable::Row @client={{this.client}} />`);
    assert.dom('.my-custom-class').hasClass('bg-green');
    assert.dom('.my-custom-class').hasAttribute('id', 'client-1');
  });
});
