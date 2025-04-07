// Create audio objects for each song.
// Each key (like 10, 11, etc.) maps to an audio file.
var songs = {
    10: new Audio("audio/ah-ha.mp3"),
    11: new Audio("audio/back-of-the-net.mp3"),
    12: new Audio("audio/bangoutoforder.mp3"),
    13: new Audio("audio/dan.mp3"),
    14: new Audio("audio/emailoftheevening.mp3"),
    15: new Audio("audio/hellopartridge.mp3"),
    16: new Audio("audio/iateascotchegg.mp3"),
    17: new Audio("audio/imconfused.mp3")
};

// Select all elements with the class "btn" (these are the sound buttons)
var ppbuttons = document.getElementsByClassName("btn");

// Loop through all the buttons and add an event listener to each one
for (var i = 0; i < ppbuttons.length; i++) {
    // When the button is clicked, run a function
    ppbuttons[i].addEventListener("click", function(event) {
        // 'event.target' is the button that was clicked
        var button = event.target;

        // Get the song ID from the button's custom data attribute (data-song-id)
        var songIndex = button.getAttribute("data-song-id");

        // Play the song with the corresponding ID
        playSong(songIndex);
    });
}

// This function plays a song based on the song ID passed to it
function playSong(songIndex) {
    // Get the Audio object from the songs list
    var song = songs[songIndex];

    // If the song exists, play it
    if (song) {
        song.play();
    }
}
