(function() {
    function Auth(UserData) {
      var Auth = {}

      Auth.loggedIn = sessionStorage.loggedIn || false;

      Auth.username = sessionStorage.username || null;

      Auth.userid = sessionStorage.userid || null;

      Auth.tryLogin = function(username, password) {
        var User = UserData.getUserByName(username);
        if(User) {
          if(User.password === password) {
            Auth.loggedIn = true;
            sessionStorage.loggedIn = true;
            Auth.username = username;
            sessionStorage.username = username;
            Auth.userid = User.id;
            sessionStorage.userid = User.id;
          } else{
            alert("Invalid password")
          }
        } else {
          alert("Username does not exist");
        }
      }

      Auth.logout = function() {
        Auth.loggedIn = false;
        sessionStorage.loggedIn = false;
      }

      return Auth
    }

    angular
        .module('blocJams')
        .factory('Auth', ['UserData', Auth]);
})();
