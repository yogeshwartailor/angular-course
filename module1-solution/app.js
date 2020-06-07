(function(){

  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
       $scope.lunchItemList = '';
       $scope.lunchMessage = '';

       $scope.checkLunchList = function(){
         if($scope.lunchItemList === ''){
           $scope.lunchMessage = 'Please enter data first';
         }else{
         var size = $scope.lunchItemList.split(',').length;
         $scope.lunchMessage = size <= 3 ? 'Enjoy!' : 'Too much!';
       }
       };
  }


})();
