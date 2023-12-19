document.addEventListener('DOMContentLoaded', function () {
    var audioElement = document.getElementById('audioElement');
    var playButton = document.getElementById('btn');

    playButton.addEventListener('click', function() {
        if (audioElement.paused) {
            audioElement.play();
            playButton.innerHTML = 'Pause Sound';
        } else {
            audioElement.pause();
            audioElement.currentTime = 0;
            playButton.innerHTML = 'Play Sound';
        }
    });
});
