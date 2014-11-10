var testApp = angular.module('testApp', []);

//Restricting access to elements

testApp.directive('directive1', function(){
    restrict: 'E',
    templateUrl:'index.html'
})
      // Take URL parameter and apply to {{name1}}
      .controller('testCtrl1', function($scope, $routeParams){
        $scope.name1 = $routeParams.name1
      });
      
      //Routing links
      
testApp.config(
  function($locationProvider, $routeProvider) {
    if('/', {
      templateUrl: 'index.html',
      controller: 'indexCtrl'
    })
    
    if('/link1', {
      templateUrl: 'link1.html',
      controller: 'link1Ctrl'
    })
    
    otherwise ({
      redirectTo: '/'
    });
    
    // Pretty URL, otherwise use Hashbang method.
    $locationProvider.html5Mode(true);
    
})
