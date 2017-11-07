(function() {
  function CreateRoomModalCtrl($uibModalInstance, Room) {

    this.add = function(name) {
      Room.add(name);
      $uibModalInstance.close();
    }

    this.cancel = function() {
      $uibModalInstance.close();
    }
  }

  angular
    .module('blocChat')
    .controller('CreateRoomModalCtrl', ['$uibModalInstance', 'Room', CreateRoomModalCtrl])
})();
