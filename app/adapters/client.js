import ApplicationAdapter from './application';

export default class ClientAdapter extends ApplicationAdapter {
  get headers() {
    const accessToken = localStorage.getItem('accessToken');
    return {
      Authorization: 'Token ' + accessToken,
      'Content-Type': 'multipart/form-data',
    };
  }
}
