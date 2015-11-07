angular.module('starter.controllers', [])


.controller('QuizCtrl', function($scope, $rootScope, Quiz) {

// Hmm, for such a small app, I don't mind using $rootScope instead of
// setting up a huge factory. This controller might also be abstracted out
// a bit, so there's less logic in it.  

  $rootScope.user = {}

  $scope.questions = Quiz.all();

  $rootScope.responses = {
    'q1': undefined,
    'q2': undefined,
    'q3': undefined,
    'q4': undefined,
    'q5': undefined,
    'q6': undefined,
    'q7': undefined,
    'q8': undefined
  }

  $scope.inputUser = function(){
    $rootScope.first = $scope.firstname;
    $rootScope.last = $scope.lastname;
    $rootScope.email = $scope.emailAddress;
  }


  $scope.gotEmail = function(){
    if ($rootScope.email === undefined || $rootScope.email === '' || $rootScope.email.indexOf('@') === -1){
      return false;
    }
    return true; 
  }  

  $scope.gotQuestions = function(){
    for (var key in $rootScope.responses){
      if ($rootScope.responses[key] === undefined){
        return false;
      }
    }
    return true;
  }

  $scope.isReady = function(){
    return ($scope.gotEmail() && $scope.gotQuestions); 
  }



})


