(function() {
  function HomeCtrl($scope, $cookies, $filter, $uibModal, Room, Message) {
    this.rooms = Room.all;

    this.openNewRoomModal = function() {
      let modalInstance = $uibModal.open({
        templateUrl: 'templates/create_room_modal.html',
        controller: 'CreateRoomModalCtrl as createRoom',
        size: 'sm',
        backdrop: 'static',
        keyboard: false
      });
    }

    this.setActiveRoom = function(room) {
      $scope.activeRoom = room;
      $scope.messages = Message.getByRoomId(room.$id);
    }

    this.sendMessage = function() {
      let content = $scope.content;
      let username = $cookies.get('blocChatCurrentUser');
      let sentAt = $filter('date')(new Date(), 'shortTime');
      let roomId = $scope.activeRoom.$id;

      Message.send({ content, username, sentAt, roomId });

      $scope.content = null;
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope', '$cookies', '$filter', '$uibModal', 'Room', 'Message', HomeCtrl]);
})();
