import { RESTDataSource } from 'apollo-datasource-rest';

export class BookApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4000/';
  }

  cacheKeyFor(request) {
    return 'books';
  }

  cacheOptionsFor(res, req) {
    if (req.url === `${this.baseURL}books`) {
      return {
        ttl: 60 * 5,
      };
    }

    return null;
  }

  async getBooks() {
    return this.get('books');
  }
}
