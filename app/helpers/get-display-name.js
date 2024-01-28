export default function getDisplayName(client) {
  if (client) return `${client.name} <${client.email}>`;
  return '';
}
