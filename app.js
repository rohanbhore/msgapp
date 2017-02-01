(function ()
{
  'use strict';

  angular.module('MsgApp',[])

    .controller('MsgController',MsgController)
    .filter('loves',LovesFilter)
    .filter('truth',truthFilter);

      MsgController.$inject=['$scope','lovesFilter'];

       function MsgController($scope,lovesFilter)
       {

        $scope.stateOfBeing="hungry";


        $scope.sayMessage=function()
        {
          var msg="rohan like to eat snacks!";
            return  msg;
        };
        $scope.sayLovesMessage=function()
        {
          var msg="rohan like to eat snacks!";
          msg=lovesFilter(msg);
          return msg;
        };
        $scope.feed=function()
        {
          $scope.stateOfBeing="fed";
        };
     }
    function LovesFilter()
    {
      return function(input)
      {
      input=input || "";
      input=input.replace("like","loves");
      return input;
     };
   }
   function truthFilter() {
     return function(input,target,replace){
     input=input || "";
     input=input.replace(target,replace);
     return input;
   };
 };
})();
