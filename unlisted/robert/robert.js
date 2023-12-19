document.addEventListener('DOMContentLoaded', function () {
    var audioElement = document.getElementById('audioElement');
    var playButton = document.getElementById('btn');

    playButton.addEventListener('click', function() {
        if (audioElement.paused) {
            audioElement.play(); 
        } else {
            audioElement.pause();
            audioElement.currentTime = 0; 
        }
    });
});
