import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class CountButtonComponent extends Component {
  @service('user-reports') userReports;

  @action
  incrementCount() {
    this.userReports.incrementCount();
  }
}
