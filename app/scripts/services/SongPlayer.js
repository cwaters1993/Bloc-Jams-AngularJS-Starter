(function() {
    function SongPlayer() {

        /*
        * @desc SongPlzyer object
        * @type {Object}
        */
         var SongPlayer = {};

         /*
         * @desc Song object of the currently playing song
         * @type {Object}
         */
         var currentSong = null;

         /*
         * @desc Buzz object audio file
         * @type {Object}
         */
         var currentBuzzObject = null;

         /*
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */
         var setSong = function(song) {
           if (currentBuzzObject) {
               currentBuzzObject.stop();
               currentSong.playing = null;
           }

           currentBuzzObject = new buzz.sound(song.audioUrl, {
               formats: ['mp3'],
               preload: true
           });

           currentSong = song;
        };

        /*
        * @function playSong
        * @desc Plays currentBuzzObject and sets song.playing to be true
        * @param {Object} song
        */
        var playSong = function(song) {
          currentBuzzObject.play();
          song.playing = true;
        };

        /*
        * @function playSong
        * @desc Plays the input song, sets currentSong and song.playing, and (if applicable) stops previously playing song
        * @param {Object} song
        */
         SongPlayer.play = function(song) {
           if (currentSong !== song) {
             setSong(song);
             playSong(song);
           } else if (currentSong === song) {
               if (currentBuzzObject.isPaused()) {
                   playSong(song);
               }
     }
         };

         /*
         * @function playSong
         * @desc Pauses the song and updates song.playing
         * @param {Object} song
         */
         SongPlayer.pause = function(song) {
           currentBuzzObject.pause();
           song.playing = false;
         };

         return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
