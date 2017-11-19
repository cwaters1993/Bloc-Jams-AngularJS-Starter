(function() {
     function UserData() {
         var UserData = {};

         var AllUsers = [
         { id: 0, username: 'bob', password: 'dylan', favSong: 'Like a Rolling Stone', favBand: 'The Beatles' },
         { id: 1, username: 'pablo', password: 'picasso', favSong: 'Blue', favBand: 'The Strokes'}
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
