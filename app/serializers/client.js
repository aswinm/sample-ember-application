import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ClientSerializer extends JSONAPISerializer {
  serialize(snapshot, options) {
    let json = super.serialize(...arguments);
    let phone_number = json.data.attributes.phone_number;
    if (phone_number) {
      json.data.attributes.phone_number = {
        country_code: phone_number.slice(0, 3),
        phone_number: phone_number.slice(3),
      };
    } else {
      json.data.attributes.phone_number = {
        country_code: '',
        phone_number: '',
      };
    }
    return json;
  }

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.data.map(function (element) {
      element.phone_number = element.country_code + element.phone_number;
    });
    return super.normalizeResponse(...arguments);
  }
}
