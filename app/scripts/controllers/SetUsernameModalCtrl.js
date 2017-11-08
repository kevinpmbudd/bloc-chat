(function() {
  function SetUsernameModalCtrl($cookies, $uibModalInstance) {

    this.setUsername = function(name) {
      if (name !== undefined && name !== '') {
        $cookies.put('blocChatCurrentUser', name);
        $uibModalInstance.close();
      }
    }
  }

  angular
    .module('blocChat')
    .controller('SetUsernameModalCtrl', ['$cookies', '$uibModalInstance', SetUsernameModalCtrl])
})();
