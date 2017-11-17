(function() {
    function Auth(UserData) {
      var Auth = {}

      Auth.loggedIn = sessionStorage.loggedIn || false;

      Auth.user = sessionStorage.user || null;

      Auth.tryLogin = function(username, password) {
        var User = UserData.getUserByName(username);
        if(User) {
          if(User.password === password) {
            Auth.loggedIn = true;
            sessionStorage.loggedIn = true;
            Auth.user = User;
            sessionStorage.user = User;
            console.log(Auth.loggedIn)
          } else{
            alert("Invalid password")
          }
        } else {
          alert("Username does not exist");
        }
      }

      return Auth
    }

    angular
        .module('blocJams')
        .factory('Auth', ['UserData', Auth]);
})();
