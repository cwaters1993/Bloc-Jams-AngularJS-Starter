(function() {
    function ProfileCtrl(UserData, $location) {
      var pc = this
      pc.id = $location.search().userid;
      pc.username = $location.search().username;
      console.log(pc.id == null);
      console.log(pc.username == null);
      this.validurl = function() {
        if(pc.id == null) {return false};
        if(pc.username == null) {return false};
        UserData.getUserByID(pc.id)
      }
    }

    angular
        .module('blocJams')
        .controller('ProfileCtrl', ['UserData', '$location', ProfileCtrl]);
})();
