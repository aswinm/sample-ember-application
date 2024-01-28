import Model, { attr, belongsTo } from '@ember-data/model';

export default class ClientModel extends Model {
  @attr('string') name;
  @attr('string') company_name;
  @attr('string') email;
  @attr('string') phone_number;
  @attr('boolean') active;
  @attr('gender') gender;
  @belongsTo('salesman', { async: true, inverse: null }) salesman;

  @attr('date', {
    defaultValue() {
      return new Date();
    },
  })
  date;

  get displayTag() {
    return `${this.name} <${this.email}>`;
  }
}
