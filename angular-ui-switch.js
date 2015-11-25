angular.module('uiSwitch', [])

.directive('switch', function(){
  return {
    restrict: 'AE'
  , replace: true
  , transclude: true
  , scope: {
      ngModel: "=",
      disabled: "="
  }
  , templateUrl: 'angular-ui-switch.html'
  , controller: ["$scope", function($scope){
      if (!$scope.disabled)
        $scope.disabled = false;

      $scope.onSwitch = function(){
        if(!$scope.disabled){
          $scope.ngModel = !$scope.ngModel;
        }
      }
    }]
  }
});
