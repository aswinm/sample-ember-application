import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ClickTrackerComponent extends Component {
  @tracked count = 0;
  additionalCount = 0;

  get multipliedCount() {
    return this.count * 2;
  }

  @action
  increaseCount(increaseBy = 1) {
    this.count += increaseBy;
  }

  @action
  increaseAdditionalCount() {
    this.additionalCount += 1;
  }
}
