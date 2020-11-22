import { BookApi } from './book.api';
import { LibraryAPI } from './library.api';

export default () => {
  return {
    bookAPI: new BookApi(),
    libraryAPI: new LibraryAPI(),
  };
};
