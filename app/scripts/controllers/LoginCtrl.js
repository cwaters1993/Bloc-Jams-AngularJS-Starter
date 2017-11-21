(function() {
    function LoginCtrl(Auth) {
      this.auth = Auth;
      var lc = this;
      lc.username = "";
      lc.password = "";
      this.loginAttempt = function() {
        Auth.tryLogin(lc.username, lc.password);
      };
      this.logout = function() {
        Auth.logout();
        lc.password = "";
      }
    }

    angular
        .module('blocJams')
        .controller('LoginCtrl', ['Auth', LoginCtrl]);
})();
