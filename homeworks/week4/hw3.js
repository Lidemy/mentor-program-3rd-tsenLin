const request = require('request');
const process = require('process');

switch (process.argv[2]) {
  case 'list':
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
    break;

  case 'read':
    request(
      `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      (error, response, body) => {
        if (response.statusCode === 200) {
          const book = JSON.parse(body);
          console.log(book.name);
        }
      },
    );
    break;

  case 'delete':
    request.delete(
      `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      (error, response) => {
        if (response.statusCode === 200) {
          console.log('刪除成功');
        }
      },
    );
    break;

  case 'create':
    request.post(
      {
        url: 'https://lidemy-book-store.herokuapp.com/books',
        form: {
          name: process.argv[3],
        },
      },
      (error, response) => {
        if (response.statusCode === 201) {
          console.log('新增成功');
        }
      },
    );
    break;

  case 'update':
    request.patch(
      {
        url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
        form: {
          name: process.argv[4],
        },
      },
      (error, response) => {
        if (response.statusCode === 200) {
          console.log('修改成功');
        }
      },
    );
    break;

  default:
    console.log('參數錯誤');
    break;
}
