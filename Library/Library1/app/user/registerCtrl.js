
var registerCtrl = function ($scope, $http) {
    $scope.newUser = {};

    $http.get('/api/industries').then(function (result) {
        $scope.industries = result.data;
    });
    $http.get('/api/horizontals').then(function (result) {
        $scope.horizontals = result.data;
    });
    $http.get('/api/functionalities').then(function (result) {
        $scope.functionalities = result.data;
    });
    $http.get('/api/organizations').then(function (result) {
        $scope.organizations = result.data;
    });

    $scope.hasError = function (elem) {
        return ($scope.submitted || elem.$touched) && elem.$invalid;
    }

    $scope.registerUser = function () {
        $scope.submitted = true;
        //console.log($scope.painPoint);
        var appUser = $scope.newUser;
        $http.post('/api/AppUsers', appUser).then(function (result) {
            alert('Created Successfully.');
        });
    }
}

registerCtrl.$inject = ['$scope', '$http'];
app.controller('registerCtrl', registerCtrl);