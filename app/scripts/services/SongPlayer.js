(function() {
    function SongPlayer($rootScope, Fixtures) {

        /*
        * @desc SongPlayer object
        * @type {Object}
        */
         var SongPlayer = {};

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
               SongPlayer.currentSong.playing = null;
           }

           currentBuzzObject = new buzz.sound(song.audioUrl, {
               formats: ['mp3'],
               preload: true
           });

           currentBuzzObject.bind('timeupdate', function() {
             $rootScope.$apply(function() {
               SongPlayer.currentTime = currentBuzzObject.getTime();
             });
           });

           SongPlayer.currentSong = song;
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
        * @function getSongIndex
        * @desc finds index of input song
        * @param {Object} song
        * @return index of the song
        */
        var getSongIndex = function(song) {
            return SongPlayer.currentAlbum.songs.indexOf(song);
        };

        var stopSong = function() {
          currentBuzzObject.stop();
          SongPlayer.currentSong.playing = null;
        };

        /*
        * @desc Album data
        * @type {Object}
        */
        SongPlayer.currentAlbum = Fixtures.getAlbum();

        /*
        * @desc Song object of the currently playing song
        * @type {Object}
        */
        SongPlayer.currentSong = null;

        /*
        * @desc Current playback time (in seconds) of currently playing song
        * @type {Number}
        */
        SongPlayer.currentTime = null;

        /*
        * @function playSong
        * @desc Plays the input song, sets SongPlayer.currentSong and song.playing, and (if applicable) stops previously playing song
        * @param {Object} song
        */
         SongPlayer.play = function(song) {
           song = song || SongPlayer.currentSong;
           if (SongPlayer.currentSong !== song) {
             setSong(song);
             playSong(song);
           } else if (SongPlayer.currentSong === song) {
               if (currentBuzzObject.isPaused()) {
                   playSong(song);
               }
           }
         };

         /*
         * @function SongPlayer.pause
         * @desc Pauses the song and updates song.playing
         * @param {Object} song
         */
         SongPlayer.pause = function(song) {
           song = song || SongPlayer.currentSong;
           currentBuzzObject.pause();
           song.playing = false;
         };

         /*
         * @function SongPlayer.previous
         * @desc plays the previous song or stops the song if there are no previous songs
         */
         SongPlayer.previous = function() {
             var currentSongIndex = getSongIndex(SongPlayer.currentSong);
             currentSongIndex--;

             if (currentSongIndex < 0) {
                stopSong();
             } else {
                var song = SongPlayer.currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
         };

         /*
         * @function SongPlayer.previous
         * @desc plays the next song or stops the song if there are no next songs
         */
         SongPlayer.next = function() {
             var currentSongIndex = getSongIndex(SongPlayer.currentSong);
             currentSongIndex++;

             if (currentSongIndex >= SongPlayer.currentAlbum.songs.length) {
                stopSong();
             } else {
                var song = SongPlayer.currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
         };

         /*
        * @function setCurrentTime
        * @desc Set current time (in seconds) of currently playing song
        * @param {Number} time
        */
        SongPlayer.setCurrentTime = function(time) {
            if (currentBuzzObject) {
                currentBuzzObject.setTime(time);
            }
        };

         return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();
