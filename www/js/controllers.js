angular.module('starter.controllers', [])


.controller('QuizCtrl', function($rootScope, $scope, Quiz) {

// Hmm, for such a small app, I don't mind using $rootScope instead of
// setting up a huge factory. 
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
    $rootScope.user.first = $scope.firstname;
    $rootScope.user.last = $scope.lastname;
    $rootScope.user.email = $scope.email;

    console.log($rootScope.user);
  }

  $scope.selectChange = function(answer, question) {
    console.log("Question", question.prompt, "Answer", answer.text, "value:", answer.value);
    console.log("responses:", JSON.stringify($scope.responses));
    console.log("Value Changed");
    };

})
