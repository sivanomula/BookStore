
app.controller('bookCtrl', function ($scope, bookService)//, $routeParams,$location) 
{
    $scope.books = [];
    
    $scope.book = {};
    $scope.editIndex = -1;
    $scope.mode = 'list';
    
    $scope.getBooks = function () {
        bookService.getBooks().then(function (response) {
            console.log(response);
            $scope.books = response.data;
        });
    }
    $scope.getBooks();
    $scope.save = function () {
        if ($scope.editIndex == -1) {
            $scope.books.push($scope.book);
            bookService.addBook($scope.book).then(function () {
                $scope.getBooks();
            });;
        }
        else {
            $scope.books[$scope.editIndex] = $scope.book;
            bookService.updateBook($scope.book).then(function () {
                $scope.getBooks();
            });
        }
        $scope.book = {};
        $scope.editIndex = -1;

        $scope.mode = 'list';
    }
    $scope.edit = function (index) {
        $scope.editIndex = index;
        angular.copy($scope.books[$scope.editIndex], $scope.book);
        $scope.mode = 'edit';
    }  
    $scope.add = function () {
        $scope.book = {};
        $scope.editIndex = -1;
        $scope.mode = 'add';
    }
    $scope.delete = function (index,bookId) {
        $scope.book = {};
        $scope.editIndex = -1;
        bookService.deleteBook(bookId).then(function () {
            $scope.getBooks();
        });
        $scope.mode = 'list';
    }
    $scope.cancel = function () {
        $scope.book = {};       
        $scope.mode = 'list';
    }
});

app.controller('bookDetailsCtrl', function ($scope,$routeParams, bookDetailsService) {
    $scope.bookDetails = [];
    $scope.bookId = $routeParams.bookId;
    $scope.bookDetail = {};
    $scope.mode = 'list';
    $scope.getBookDetails = function () {
        bookDetailsService.getBookDetails($scope.bookId).then(function (response) {
            console.log(response); 
            $scope.bookDetails = response.data;
        });
    }
    $scope.getBookDetails();
    $scope.save = function () {
        if ($scope.editIndex == -1) {
            $scope.bookDetails.push($scope.bookDetail);
            bookDetailsService.addDetail($scope.bookDetail).then(function () {
                $scope.getBookDetails();
            });
        }
        else {
            $scope.bookDetails[$scope.editIndex] = $scope.bookDetail;
            bookDetailsService.updateDetail($scope.bookDetail).then(function () {
                $scope.getBookDetails();
            });
        }
        $scope.bookDetail = {};
        $scope.editIndex = -1;
        $scope.mode = 'list';
    }
    $scope.edit = function (index) {
        $scope.editIndex = index;
        angular.copy($scope.bookDetails[$scope.editIndex], $scope.bookDetail);
        $scope.bookDetail.dateOfPublishing = new Date($scope.bookDetail.dateOfPublishing);
        $scope.mode = 'edit';
    }
    $scope.add = function () {
        $scope.bookDetail = {};
        $scope.bookDetail.bookId = $scope.bookId;
        $scope.bookDetail.dateOfPublishing = new Date();
        $scope.editIndex = -1;
        $scope.mode = 'add';
    }
    $scope.delete = function (index, bookId) {
        $scope.bookDetail = {};
        $scope.editIndex = -1;
        bookDetailsService.deleteDetail(bookId).then(function () {
            $scope.getBookDetails();
        });
        $scope.mode = 'list';
    }
    $scope.cancel = function () {
        $scope.bookDetail = {};
        $scope.mode = 'list';
    }
});