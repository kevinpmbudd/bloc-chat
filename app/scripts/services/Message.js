(function() {
  function Message($cookies, $filter, $firebaseArray) {
    let Message = {};
    let ref = firebase.database().ref().child("messages");
    let messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      let sortedRef = ref.orderByChild('roomId').equalTo(roomId);
      return $firebaseArray(sortedRef);
    };

    Message.send = function(newMessage, activeRoom) {
      if (newMessage !== undefined && newMessage !== '' && activeRoom !== undefined) {
        let currentUser = $cookies.get('blocChatCurrentUser');
        let date = $filter('date')(new Date(), 'shortTime');
        let message = {
          username: currentUser,
          content: newMessage,
          sentAt: date,
          roomId: activeRoom
        };
        messages.$add(message);
      }

    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$cookies', '$filter', '$firebaseArray', Message]);
})();
