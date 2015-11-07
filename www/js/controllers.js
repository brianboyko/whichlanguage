angular.module('starter.controllers', [])


.controller('QuizCtrl', function($scope, Quiz) {

  $scope.user = {
    'first': $scope.firstname,
    'last': $scope.lastname,
    'email': $scope.email
  }

  $scope.questions = Quiz.all();

  $scope.responses = {
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
    $scope.user.first = $scope.firstname;
    $scope.user.last = $scope.lastname;
    $scope.user.email = $scope.email;

    console.log($scope.user);
  }

  $scope.selectChange = function(answer, question) {
    console.log("Question", question.prompt, "Answer", answer.text, "value:", answer.value);
    console.log("responses:", JSON.stringify($scope.responses));
    console.log("Value Changed");
    };

})
