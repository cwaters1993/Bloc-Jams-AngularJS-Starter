(function() {
    function ProfileCtrl(Auth, UserData, $location) {
      var pc = this
      pc.id = $location.search().userid;
      pc.username = $location.search().username;
      pc.editingSong = false;
      pc.editingBand = false;
      pc.validUrl = function() {
        if(pc.id == null) {return false};
        if(pc.username == null) {return false};
        if(UserData.getUserByID(pc.id).username == pc.username) {
          return true;
        } else {
          return false;
        };
      };
      pc.favSong = (pc.validUrl() ? UserData.getUserByID(pc.id).favSong : null);
      pc.favBand = (pc.validUrl() ? UserData.getUserByID(pc.id).favBand : null);
      pc.profPic = (pc.validUrl() ? UserData.getUserByID(pc.id).profPic : null);
      pc.canEdit = function() {
        if (pc.validUrl() && (pc.username == Auth.username) && Auth.loggedIn) {
          return true;
        }
        return false;
      };
      pc.editSong = function() {
        if (pc.canEdit()) {
          pc.editingSong = true;
        }
      };
      pc.editBand = function() {
        if (pc.canEdit()) {
          pc.editingBand = true;
        }
      };
      pc.saveSong = function() {
        pc.editingSong = false;
      };
      pc.saveBand = function() {
        pc.editingBand = false;
      };
    }

    angular
        .module('blocJams')
        .controller('ProfileCtrl', ['Auth', 'UserData', '$location', ProfileCtrl]);
})();
