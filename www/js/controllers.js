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

  // var responses = {
  //   'q1': $scope.q1.value,
  //   'q2': $scope.q2.value,
  //   'q3': $scope.q3.value,
  //   'q4': $scope.q4.value,
  //   'q5': $scope.q5.value,
  //   'q6': $scope.q6.value,
  //   'q7': $scope.q7.value,
  //   'q8': $scope.q8.value
  // }

//debug code for dev
  $scope.selectChange = function(answer) {
    console.log("Question", answer.text, "value:", answer.value);
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
