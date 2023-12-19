document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.btn'); 
    buttons.forEach(function (button) {
        button.addEventListener('click', function() {
            var audioElement = button.nextElementSibling;
            if (audioElement) {
                if (audioElement.paused) {
                    audioElement.play();
                } else {
                    audioElement.pause();
                }
            }
        });
    });
});
