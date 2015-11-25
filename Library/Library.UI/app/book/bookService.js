
app.service('bookService', function ($http) {
    this.getBooks = function () {
        return $http.get('http://localhost:57947/api/books');
    }
    this.addBook = function (book) {
        var data = { BookId: 5, BookName: book.bookName };
        return $http.post('http://localhost:57947/api/books',data);
    }
    this.updateBook = function (book) {
        var data = { BookId: book.BookId, BookName: book.BookName };
        return $http.put('http://localhost:57947/api/books/' + book.bookId, data);
    }
    this.deleteBook = function (bookId) {
        return $http.delete('http://localhost:57947/api/books/' + bookId);
    }
    this.getBook = function (bookId) {
        return $http.get('http://localhost:57947/api/books/' + bookId);
    }
    this.getDetails = function (bookId) {
        return $http.get('http://localhost:57947/api/books/getDetails/' + bookId);
    }
});

app.service('bookDetailsService', function ($http, bookService) {
    this.getBookDetails = function (bookId) {
        return bookService.getDetails(bookId);
    }
    this.addDetail = function (bookDetails) {        
        return $http.post('http://localhost:57947/api/bookdetails', bookDetails);
    }
    this.updateDetail = function (bookDetails) {
        return $http.put('http://localhost:57947/api/bookdetails/' + bookDetails.bookDetailsId, bookDetails);
    }
    this.deleteDetail = function (bookDetailsId) {
        return $http.delete('http://localhost:57947/api/bookdetails/' + bookDetailsId);
    }
});