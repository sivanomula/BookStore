var app = angular.module('app', []);
app.controller('userCtrl', function ($scope) {
    $scope.employees = [];
    $scope.employee = {};
    $scope.editIndex = -1;
    $scope.save = function () {
        if ($scope.editIndex == -1) {
            $scope.employees.push($scope.employee);        }
        else {
            $scope.employees[$scope.editIndex] = $scope.employee;
        }
        $scope.employee = {};
        $scope.editingEmployee = {};
        $scope.editIndex = -1;
    }
    $scope.edit = function (index) {
        $scope.editIndex = index;
        angular.copy($scope.employees[$scope.editIndex], $scope.employee);
    }
});