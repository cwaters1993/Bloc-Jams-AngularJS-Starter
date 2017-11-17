(function() {
     function UserData() {
         var UserData = {};

         var Users = [
         { id: 0, username: 'bob', password: 'dylan' },
         { id: 1, username: 'pablo', password: 'picasso'}
         ];

         UserData.getUserByID = function(id) {
           return Users[id];
         };

         UserData.getUserByName = function(name) {
           var Users = [];
           for(var i = 0; i<Users.length; i++){
             if(Users[i].username === name) {
               Users.push(Users[i])
             }
           }
           return albumArray;
         };

         return UserData;
     }

     angular
         .module('blocJams')
         .factory('UserData', UserData);
 })();
