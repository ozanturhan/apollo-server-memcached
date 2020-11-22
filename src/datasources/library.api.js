import { RESTDataSource } from 'apollo-datasource-rest';

export class LibraryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4000/';
  }

  cacheKeyFor(request) {
    return 'libraries';
  }

  cacheOptionsFor(res, req) {
    if (req.url === `${this.baseURL}libraries`) {
      return {
        ttl: 60 * 5,
      };
    }

    return null;
  }

  async getLibraries() {
    return this.get('libraries');
  }
}
