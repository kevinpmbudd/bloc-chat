(function() {
  function HomeCtrl($uibModal, Room) {
    this.rooms = Room.all;

    this.openCreateRoomModal = function() {
      let modalInstance = $uibModal.open({
        templateUrl: 'templates/create_room_modal.html',
        controller: 'CreateRoomModalCtrl as createRoom',
        size: 'sm'
      });
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$uibModal', 'Room', HomeCtrl]);
})();
