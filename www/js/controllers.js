angular.module('starter.controllers', [])


.controller('QuizCtrl', function($scope, $rootScope, $state, $http, Quiz) {

// Hmm, for such a small app, I don't mind using $rootScope instead of
// setting up a huge factory. This controller might also be abstracted out
// a bit, so there's less logic in it.  

  $scope.questions = Quiz.all();

  $rootScope.responses = $rootScope.responses || {
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

  $scope.toQuiz = function() {
    $state.go('tab.quiz');
  };

  $scope.toReview = function() { 
    $state.go('tab.review'); 
  };

  $scope.questionChange = function(){
    // console.log($rootScope.responses);
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

  $scope.submit = function(){
    console.log("$scope.submit being called");
    var user = {
      first: $rootScope.first,
      last: $rootScope.last,
      email: $rootScope.email,
    };
    user.scores = {
      c: 0,
      cPlusPlus: 0,
      cSharp: 0,
      java: 0,
      javascript: 0,
      objectiveC: 0,
      php: 0,
      python: 0,
      ruby: 0
    }
    for(var ques in $rootScope.responses){
      for(var lang in $rootScope.responses[ques].value){
        user.scores[lang] += $rootScope.responses[ques].value[lang];
      }
    }
    console.log(user);

    var req = {
      method: 'POST',
      url: '/api/storeUser',
      headers: {
        'Content-Type': 'application/json'
      },
      data: user
    }
    $http(req).then(function() {
      console.log("Success")
    });
  }

})


