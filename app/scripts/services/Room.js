(function() {
  function Room($firebaseArray) {
    let Room = {};
    let ref = firebase.database().ref().child("rooms");
    let rooms = $firebaseArray(ref);

    Room.all = rooms;

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
