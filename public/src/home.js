function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => (acc + (book.borrows[0].returned === false)), 0)
}

function getMostCommonGenres(books) {
  let array = []
  let genres = {}
  books.forEach((book) => {
    if (genres[book.genre]) {
      genres[book.genre]++
    } else {
      genres[book.genre] = 1
    }
  })
  for (let genre in genres){
    array.push({name: genre, count: genres[genre]})
  }
  return array.sort ((genreA, genreB) => (genreA.count > genreB.count ? -1 : 1)).slice(0, 5)
}

function getMostPopularBooks(books) {
  return books.map((book) => {
    return {name: book.title, count: book.borrows.length}
  })
  .sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1)).slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  return books.map((book) => {
    const author = authors.find((author) => author.id === book.authorId)
    return {name: `${author.name.first} ${author.name.last}`, count: book.borrows.length}
  })
  .sort((authorA, authorB) => authorB.count - authorA.count).slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
