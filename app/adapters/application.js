import JSONAPIAdapter from '@ember-data/adapter/json-api';
import Ember from 'ember';
import ENV from '../config/environment';
import Inflector from 'ember-inflector';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api/v1';
  pathForType(type) {
    if (type === 'salesman') {
      return 'salesmen';
    }
    return Inflector.inflector.pluralize(type);
  }
  get headers() {
    const accessToken = localStorage.getItem('accessToken');
    return {
      Authorization: 'Token ' + accessToken,
      'Content-Type': 'application/json',
    };
  }
}
