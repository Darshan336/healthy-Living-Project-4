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

// Function to update the progress bar based on form completion
function updateProgressBar() {

    // Get the reference to the HTML form element with the id "registration-form"
    const form = document.getElementById('registration-form');
    const progressBar = document.getElementById('progress-bar');          // Get the reference to the HTML element with the id "progress-bar"

    const totalFields = form.elements.length - 1;                        // Calculate the total number of form fields excluding the submit button

    // Initialize variables to track completed fields and radio groups
    let completedFields = 0;
    let radioGroups = {};

     // Iterate through each form element
    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];

        if (element.type === 'radio') {                                    // Check if the element is a radio button
            const groupName = element.name;
            if (element.checked && !radioGroups[groupName]) {             // Check if the radio button is checked and not part of a group that has been counted

                radioGroups[groupName] = true;
                completedFields++;
            }
        
            
        } else if (element.type === 'checkbox') {                        // Check if the element is a checkbox and is checked

            if (element.checked) {
                completedFields++;
            }
        } else if (element.value.trim() !== '') {
            completedFields++;
        }
    }
    // Check if the trainer dropdown has a selected value
    const trainerDropdown = document.getElementById('trainer');
    if (trainerDropdown.value !== '') {
        completedFields++;
    }
    // Calculate the progress percentage and update the progress bar style and content
    const progressPercentage = Math.floor((completedFields / totalFields) * 146);
    progressBar.style.width = progressPercentage + '%';
    progressBar.textContent = progressPercentage + '%';
}


// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('registration-form');
    const displayArea = document.getElementById('display-area');
    const enteredInfoList = document.getElementById('entered-info-list');

    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        // Create an empty object to store form data
        let obj = {}
        enteredInfoList.innerHTML = '';

        // Iterate through each form element
        for (let i = 0; i < form.elements.length; i++) {
            const element = form.elements[i];

            // Check if the element is not a submit button
            if (element.type !== 'submit') {
                if (element.type === 'radio' || element.type === 'checkbox') {
                    if (element.checked) {
                        const listItem = document.createElement('li');
                        listItem.textContent = `${element.name}: ${element.value}`;
                        obj[element.name] = element.value
                        enteredInfoList.appendChild(listItem);
                    }
                } else {
                    // Create a list item for the element and add it to the list
                    const listItem = document.createElement('li');
                    listItem.textContent = `${element.name}: ${element.value}`;
                    enteredInfoList.appendChild(listItem);
                    obj[element.name] = element.value
                }
            }
        }
        // Store the form data in local storage as a JSON string
        localStorage.setItem('info',JSON.stringify(obj))

        // Display the entered information area
        displayArea.style.display = 'block';

        // Reset the form fields
        form.reset();
    });
});

// Function to validate the form fields
function validateForm() {
        // Initialize a variable to track overall form validity
        let isValid = true;

        // Get the value of the first name field
        let firstName = document.forms["registration-form"]["first-name"].value;
        // Check if the first name is empty
        if (firstName == "") {
            // Display an error message for an empty first name
            document.getElementById('fname').innerText = 'First name should not be empty';
            // Set overall form validity to false
            isValid = false;
        } else {
            // Clear the error message if the first name is not empty
            document.getElementById('fname').innerText = '';
        }
        let lastName = document.forms["registration-form"]["last-name"].value;
        if (lastName == "") {
            document.getElementById('lname').innerText = 'Last name should not be empty';
            isValid = false;
        } else {
            document.getElementById('lname').innerText = '';
        }
        let phonenumber = document.forms["registration-form"]["phone-number"].value;
        if (phonenumber == "") {
            document.getElementById('phnumber').innerText = 'enter 10 digit phone number';
            isValid = false;
        } else {
            document.getElementById('phnumber').innerText = '';
        }
        let emailid = document.forms["registration-form"]["email"].value;
        if (emailid == "") {
            document.getElementById('emailco').innerText = 'enter e-mail id';
            isValid = false;
        } else {
            document.getElementById('emailco').innerText = '';
        }
        let birthday = document.forms["registration-form"]["birthday"].value;
        if (birthday == "") {
            document.getElementById('bthday').innerText = 'birthday should not be empty';
            isValid = false;
        } else {
            document.getElementById('bthday').innerText = '';
        }
    
}



// Event listener to execute the provided function when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const trainerContainers = document.querySelectorAll('.trainer-container');
    // Iterate over each 'trainer-container' element in the NodeList
    trainerContainers.forEach(trainerContainer => {
        const trainerInfo = trainerContainer.querySelector('.trainer-info');
        // Event listener for mouseover event on the 'trainer-container'
        trainerContainer.addEventListener('mouseover', function () {
            trainerInfo.style.display = 'block';
            trainerInfo.style.opacity = '0.8';
            trainerInfo.style.transform = 'translateY(0)';
        });

        // Event listener for mouseout event on the 'trainer-container'
        trainerContainer.addEventListener('mouseout', function () {
            trainerInfo.style.display = 'none';
            trainerInfo.style.opacity = '0';
            trainerInfo.style.transform = 'translateY(20px)';
        });
    });
});
