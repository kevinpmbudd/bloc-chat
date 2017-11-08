(function() {
  function HomeCtrl($scope, $uibModal, Room, Message) {
    this.rooms = Room.all;

    this.openNewRoomModal = function() {
      let modalInstance = $uibModal.open({
        templateUrl: 'templates/create_room_modal.html',
        controller: 'CreateRoomModalCtrl as createRoom',
        size: 'sm'
      });
    }

    this.setActiveRoom = function(room) {
      $scope.activeRoom = room;
      $scope.messages = Message.getByRoomId(room.$id);
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$scope','$uibModal', 'Room', 'Message', HomeCtrl]);
})();
