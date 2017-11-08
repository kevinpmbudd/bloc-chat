(function() {
  function Message($firebaseArray) {
    let Message = {};
    let ref = firebase.database().ref().child("messages");
    let messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      let sortedRef = ref.orderByChild('roomId').equalTo(roomId);
      return $firebaseArray(sortedRef);
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
