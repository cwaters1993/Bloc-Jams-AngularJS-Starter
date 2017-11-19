(function() {
    function ProfileCtrl(UserData, $location) {
      var pc = this
      pc.id = $location.search().userid;
      pc.username = $location.search().username;
      this.validUrl = function() {
        if(pc.id == null) {return false};
        if(pc.username == null) {return false};
        if(UserData.getUserByID(pc.id).username == pc.username) {
          return true;
        } else {
          return false;
        };
      };
      this.favSong = function() {
        return UserData.getUserByID(pc.id).favSong;
      }
      this.favBand = function() {
        return UserData.getUserByID(pc.id).favBand;
      }
    }

    angular
        .module('blocJams')
        .controller('ProfileCtrl', ['UserData', '$location', ProfileCtrl]);
})();
