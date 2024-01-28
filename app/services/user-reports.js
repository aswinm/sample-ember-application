import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UserReportsService extends Service {
  @tracked count = 0;

  get multipliedCount() {
    return this.count * 2;
  }

  incrementCount() {
    this.count += 1;
    console.log(this.count);
  }

  getCount() {
    return this.count;
  }
}
