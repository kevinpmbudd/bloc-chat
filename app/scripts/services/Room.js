(function() {
  function Room($firebaseArray) {
    let Room = {};
    let ref = firebase.database().ref().child("rooms");
    let rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(room) {
      rooms.$add(room).then(function(ref) {
        let id = ref.key;
        console.log("added record with id " + id);
        rooms.$indexFor(id);
      });
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
