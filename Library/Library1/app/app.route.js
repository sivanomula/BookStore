angular.module('app')
.config(['$routeProvider',
function ($routeProvider) {
    var routes = [{
        url: '/home',
        template: 'app/user/register.html',
        controller: 'registerCtrl'
    },
    {
        url: '/book',
        template: 'app/book/list.html',
        controller: 'bookCtrl'
    },
    {
        url: '/book/details/:bookId',
        template: 'app/book/details.html',
        controller: 'bookDetailsCtrl'
    }
    ];
    routes.forEach(function (r, index) {
        $routeProvider.when(r.url, { templateUrl: r.template, controller: r.controller });
    });
    $routeProvider.otherwise({ redirectTo: '/book' });
}]);