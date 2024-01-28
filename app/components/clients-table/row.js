import Component from '@glimmer/component';

export default class ClientsTableRowComponent extends Component {
  getDisplayName = (client) => {
    if (client) return `${client.name} <${client.email}>`;
  };
}
