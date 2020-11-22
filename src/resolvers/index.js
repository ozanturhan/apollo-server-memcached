export default {
  Query: {
    libraries: (_source, _args, { dataSources }) => {
      return dataSources.libraryAPI.getLibraries();
    },
  },
  Library: {
    async books(parent, args, { dataSources }) {
      // Filter the hardcoded array of books to only include
      // books that are located at the correct branch
      return (await dataSources.bookAPI.getBooks()).filter((book) => book.branch === parent.branch);
    },
  },
};
