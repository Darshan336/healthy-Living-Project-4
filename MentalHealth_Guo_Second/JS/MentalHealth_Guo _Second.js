// Array containing file paths of photos
const photos = [
    '../img/1.png', '../img/2.png', '../img/3.png', '../img/4.png', '../img/5.png',
    '../img/6.png', '../img/7.png', '../img/8.png', '../img/9.png', '../img/10.png',
    '../img/11.png', '../img/12.png', '../img/13.png'
];

// Variable to keep track of the current index
let i = 0;

// Function to display the current photo
function showPhoto() {
    // Ensure the index is within the valid range
    if (i > (photos.length - 1)) {
        i = 0;
    }
    if (i < 0) {
        i = (photos.length - 1);
    }

    // Use jQuery to animate the image transition
    $('.dialog img').hide("slide", { direction: "left" }, 200, function () {
        // Change the source of the image and show with a slide animation
        $(this).attr('src', photos[i]).show("slide", { direction: "right" }, 200);
    });

    // Update the selected indicator in the list
    $('.dialog ul .selected').removeClass('selected');
    $(`.dialog ul li:nth-child(${i + 1})`).addClass("selected");
}

// Function to navigate to the next or previous photo
function plusSlides(n) {
    showPhoto(i += n);
}

// Execute the following code when the document is ready
$(document).ready(function() {
    // Hide the unordered list initially
    $('#additionalresources ul').hide();

    // Handle mouse enter event for the paragraph containing additional resources
    $('#additionalresources p').mouseenter(function() {
        // Fade in the unordered list on mouse enter
        $('#additionalresources ul').fadeIn();
    });

    // Handle mouse leave event for the container of additional resources
    $('#additionalresources').mouseleave(function() {
        // Fade out the unordered list on mouse leave
        $('#additionalresources ul').fadeOut();
    });
});
