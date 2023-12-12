
// Get the unordered list element with the ID 'widget'
const ul = document.getElementById('widget')

// Define a function named 'show'
function show() {
    if (ul.classList.contains('show')) {                    // Check if the 'show' class is already present in the unordered list
        ul.classList.remove('show')                         // If present, remove the 'show' class
    }
    else {
        ul.classList.add('show')                            // If not present, add the 'show' class
    }
}


// Get all elements with the class 'custom-button' and store them in the 'buttons' variable
let buttons = document.getElementsByClassName('custom-button');

for (let i = 0; i < buttons.length; i++) {                       // Iterate through each 'custom-button' element
buttons[i].addEventListener('click', function() {                // Add a click event listener to each 'custom-button'
    window.open('../Ahmed_page_3/ahmed_pagethree.html', '_blank');       // Open a new browser window/tab with the specified URL when a button is clicked

});
}

