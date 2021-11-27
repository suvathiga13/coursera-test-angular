(function(){

'use strict'

angular.module("App",[])
.controller("AppCtrl1",AppCtrl1);

AppCtrl1.$inject=['$scope'];

function AppCtrl1 ($scope){
  $scope.menu="";
  $scope.result="Enter the Menu";
  $scope.check=function(){

     $scope.result=checkl();
   };

function checkl(){
  var l=0;
  var arr=$scope.menu.split(',')

  var r="";
  //  if(arr[0]=='' && arr.length==1){
  //    r="Please Enter Data First";
  //   }
  for(var i=0;i<arr.length;i++){
    if(arr[i]!==''){
      l++;
    }
  }
     if(l==0){
     r="Please Enter Data First";
     }
     else if(l<=3 && l!=0){
     r="Enjoy !";
     }
     else {
     r="Too Much !";
     }
     return r;
     }
}


})();
