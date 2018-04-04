var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider.when('/',{
        template:'<h1>"welcome to my website"</h1>'
    })
    .when('/profile',{
        templateUrl:'pages/profiles.html'
    })
    .when('/users',{
        templateUrl:'pages/users.html',
        controller:"userController"
    })
    .when('/users/:id',{
        templateUrl:'pages/details.html',
        controller:'userDetailsController'
    })
})

app.controller('userController',['$scope','$rootScope',function($scope,$rootScope){
    $scope.users=[
        {
            username:'user1',
            location:'ny',
            phone:12344
        },
        {
            username:'user2',
            location:'ny',
            phone:12344
        },
        {
            username:'user3',
            location:'ny',
            phone:12344
        }
    ]
    $rootScope.users = $scope.users
    $scope.createUser = function(){
        $scope.users.push($scope.createForm)
    }
}])

app.controller('userDetailController',function($scope,$routeParams,$rootScope){
    $scope.user_info = $rootScope.users
}}

app.filter('custom')