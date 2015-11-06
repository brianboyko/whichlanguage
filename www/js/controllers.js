angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('QuizCtrl', function($scope, Quiz) {
  $scope.foo = "bar"

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


  $scope.selectChange = function(answer, question) {
    console.log("Question", question.name, "Answer", answer.text, "value:", answer.value);
    $scope.responses[question.name] = answer.value;
    console.log("responses:", $scope.responses);
    };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
