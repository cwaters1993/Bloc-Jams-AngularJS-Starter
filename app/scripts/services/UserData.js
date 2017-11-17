(function() {
     function UserData() {
         var UserData = {};

         var AllUsers = [
         { id: 0, username: 'bob', password: 'dylan' },
         { id: 1, username: 'pablo', password: 'picasso'}
         ];

         UserData.getUserByID = function(id) {
           return AllUsers[id];
         };

         UserData.getUserByName = function(name) {
           return AllUsers.find(user => user.username === name);
         };

         return UserData;
     }

     angular
         .module('blocJams')
         .factory('UserData', UserData);
 })();
