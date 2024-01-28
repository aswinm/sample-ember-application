import { module, test, skip } from 'qunit';
import { setupTest } from 'my-ember-project/tests/helpers';

module('Unit | Service | user-reports', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:user-reports');
    assert.ok(service);
  });

  test('multipliedCount tracker', function (assert) {
    let service = this.owner.lookup('service:user-reports');
    service.count = 2;
    assert.equal(service.multipliedCount, 4);
  });

  test('incrementCount test', function (assert) {
    let service = this.owner.lookup('service:user-reports');
    service.count = 2;
    service.incrementCount();
    assert.equal(service.count, 3);
    service.incrementCount();
    assert.equal(service.count, 4);
    service.incrementCount = function () {
      service.count += 2;
    };
    service.incrementCount();
    // After the increment, the value should be increased to 6
    assert.equal(service.count, 6);
  });

  test('getCount test', function (assert) {
    let service = this.owner.lookup('service:user-reports');
    service.count = 2;
    assert.equal(service.getCount(), 2);
    service.count = 4;
    assert.equal(service.getCount(), 4);
  });

  skip('skip this test', function (assert) {
    assert.ok(false);
  });
});
