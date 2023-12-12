// Get the reference to the HTML element with the id "widget"
const ul=document.getElementById("widget");

// Function to toggle the "showw" class on the "ul" element
function showw(){
    if(ul.classList.contains('showw')){
        ul.classList.remove('showw')
    }
    else{
        ul.classList.add('showw');
    }
}

// Initialize the slide index and call the showSlides function with the initial slide index
let slideIndex = 1;
showSlides(slideIndex);

// Function to navigate to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to navigate to a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display the slides based on the current slide index
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}                  // If the index is greater than the number of slides, set it to the first slide
  if (n < 1) {slideIndex = slides.length}                  // If the index is less than 1, set it to the last slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";                     // Hide all slides
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");   // Remove "active" class from all dot indicators
  }

  // Display the current slide and set the corresponding dot as "active"
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Function to show video description when hovering over a video element
function showVideoDescription(element) {
  const description = element.querySelector('h3');
  description.style.display = 'block';
}

// Function to hide video description when not hovering over a video element
function hideVideoDescription(element) {
  const description = element.querySelector('h3');
  description.style.display = 'none';
}

// Autotyper functionality for multiple elements with different IDs
let speed = 150;
let elements = ['text1', 'text2', 'text3'];

function autotyper(element) {
  let text = element.textContent.trim();
  element.textContent = '';

  function type(i) {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(function() {
        type(i);
      }, speed);
    } else {
      setTimeout(function() {
        element.textContent = '';
        type(0);
      }, speed);
    }
  }

  type(0);
}

// Call autotyper for each specified element after the DOM has loaded
document.addEventListener('DOMContentLoaded', function() {
  for (let j = 0; j < elements.length; j++) {
    autotyper(document.getElementById(elements[j]));
  }
});

