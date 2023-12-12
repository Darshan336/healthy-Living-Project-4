// Function to execute when the YouTube player is ready
function onPlayerReady() {
    // No need to seek here, as it's handled when the link is clicked
}

// Function to start the video at a specific time
function startVideoAtTime(time) {
    player.seekTo(time);
    player.playVideo();
}

// Dynamically load the YouTube API script
let tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Created a new YouTube player
let player;

// Function to execute when the YouTube API is ready
function onYouTubeIframeAPIReady() {
    // Create a new YouTube player
    player = new YT.Player('youtube-video-container', {
        height: '315',
        width: '560',
        videoId: window.youtubeVideoId, // Use global variable for video ID
        events: {
            'onReady': onPlayerReady
        }
    });
}


// Function to animate elements creatively with a sequential delay
function animateElements(elements) {
    anime({
        targets: elements,
        translateY: [
            { value: -50, duration: 500, easing: 'easeInOutQuad' },
            { value: 0, duration: 800, easing: 'easeOutBounce' }
        ],
        opacity: {
            value: [0, 1],
            duration: 800,
            easing: 'easeInOutQuad'
        },
        delay: anime.stagger(500), // Add a stagger effect for each element
        autoplay: true // Start the animation immediately
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Animate recipe steps
    let recipeSteps = document.querySelectorAll('.recipe-steps ol li');
    animateElements(recipeSteps);

    // Animate ingredients
    let ingredients = document.querySelectorAll('.ingredients ul li');
    animateElements(ingredients);

    // Animate macros
    let macros = document.querySelectorAll('.macros ul li');
    animateElements(macros);
});
