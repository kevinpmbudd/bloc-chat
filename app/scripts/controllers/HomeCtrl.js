(function() {
  function HomeCtrl() {
    this.text = "hello";
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', [HomeCtrl]);
})();
