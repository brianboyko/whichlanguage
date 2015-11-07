angular.module('starter.controllers', [])


.controller('QuizCtrl', function($scope, $rootScope, Quiz) {

// Hmm, for such a small app, I don't mind using $rootScope instead of
// setting up a huge factory. 
  // $rootScope.firstname = '';
  // $rootScope.lastname = '';
  // $rootScope.email = '';
  $rootScope.user = {}

  $scope.questions = Quiz.all();

  $rootScope.responses = {
    'q1': {},
    'q2': {},
    'q3': {},
    'q4': {},
    'q5': {},
    'q6': {},
    'q7': {},
    'q8': {}
  }

  $scope.inputUser = function(){
    $rootScope.first = $scope.firstname;
    $rootScope.last = $scope.lastname;
    $rootScope.email = $scope.emailAddress;
     console.log( $rootScope.firstname, $rootScope.lastname, $rootScope.email);
  }

  $scope.selectChange = function(answer, question) {
    console.log("Question", question.prompt, "Answer", answer.text, "value:", answer.value);
    console.log("responses:", JSON.stringify($scope.responses));
    console.log("Value Changed");
    };

})

.controller('EmailCtrl')
