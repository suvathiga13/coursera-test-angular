(function(){

'use strict'

angular.module("App",[])
.controller("AppCtrl1",AppCtrl1);

AppCtrl1.$inject=['$scope'];

function AppCtrl1 ($scope){
  $scope.menu="";
  $scope.state="";
  $scope.result="Enter the Menu";
  $scope.check=function(){
     $scope.result=checkl();
     $scope.state=checkstate();
   };

function checkl(){
  var l=0;
  var arr=$scope.menu.split(',')
  var r="";
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


function checkstate(){
  var s="";
  if($scope.result=="Enjoy !")
  {
    s="success";
  }else{
    s="warning";
  }
  return s;
}

}

})();
