const request = require('request');
const process = require('process');


if (process.argv[2] === 'list') {
  request(
    'https://lidemy-book-store.herokuapp.com/books/?_limit=20',
    (error, response, body) => {
      if (response.statusCode === 200) {
        const bookList = JSON.parse(body);

        for (let i = 0; i < bookList.length; i += 1) {
          console.log(`${bookList[i].id} ${bookList[i].name}`);
        }
      }
    },
  );
}

if (process.argv[2] === 'read') {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      if (response.statusCode === 200) {
        const book = JSON.parse(body);
        console.log(book.name);
      }
    },
  );
}
