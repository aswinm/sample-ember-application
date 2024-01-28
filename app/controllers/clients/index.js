import Controller from '@ember/controller';
import { htmlSafe } from '@ember/template';

export default class ClientsIndexController extends Controller {
  queryParams = ['sortBy', 'order'];

  dummyHtml = '<p style="font-weight: bold">Test Html</p>';
  dummyHtmlSafe = htmlSafe(this.dummyHtml);
  sortBy = null;
  order = null;
}
