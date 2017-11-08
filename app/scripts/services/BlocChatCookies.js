(function() {
  function BlocChatCookies($cookies, $uibModal) {
    let currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: 'templates/set_username_modal.html',
        controller: 'SetUsernameModalCtrl as setUsername',
        size: 'sm',
        backdrop  : 'static',
        keyboard  : false
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
