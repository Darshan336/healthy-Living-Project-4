// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Get references to form and confirmation message elements
    const form = document.getElementById('diet_plan_form');
    const confirmationMessage = document.getElementById('confirmation-message');

    // Function to validate the form before submission
    function validateForm() {
        // Get values from form fields
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const goal = document.getElementById('goal').value;
        const activityLevel = document.getElementById('activity_level').value;
        const dietaryRestrictions = document.getElementById('dietary_restrictions').value;
        const mealPreference = document.getElementById('meal_preference').value;
        const allergies = document.getElementById('allergies').value;
        const preferredCuisines = document.getElementById('preferred_cuisines').value;
        const contactPreference = document.getElementById('contact_preference').value;
        const contact = document.getElementById('contact').value;

        // Validate email and phone number fields with regex
        const emailRegex = /^\S+@\S+\.\S+$/;
        const phoneRegex = /^\d{10}$/;

        if (contactPreference === 'email' && !emailRegex.test(contact)) {
            alert('Invalid email format. Please enter a valid email address.');
            return false;
        }

        if (contactPreference === 'phone' && !phoneRegex.test(contact)) {
            alert('Invalid phone number format. Please enter a valid 10-digit phone number.');
            return false;
        }

        // Basic validation for other fields
        if (!name || !age || !gender || !goal || !activityLevel || !contactPreference || !contact) {
            alert('Please fill in all required fields.');
            return false;
        }

        // Form submission logic (replace with your logic for generating diet plan)
        generateDietPlan();

        // Display confirmation message
        confirmationMessage.innerHTML = 'Form submitted successfully!';
        return false; // Prevent the form from submitting
    }

    // Function to generate a diet plan based on user selections
    function generateDietPlan() {
        // Get user selections from the form
        const goal = document.getElementById('goal').value;
        const activityLevel = document.getElementById('activity_level').value;
        const mealPreference = document.getElementById('meal_preference').value;

        // Sample logic for generating a diet plan based on user selections
        let dietPlan = '';

        if (goal === 'weight_loss') {
            dietPlan += 'For weight loss: ';
            if (activityLevel === 'sedentary') {
                dietPlan += 'Low-calorie diet with regular exercise.';
            } else {
                dietPlan += 'Balanced diet with a mix of cardio and strength training exercises.';
            }
        } else if (goal === 'maintenance') {
            dietPlan += 'For weight maintenance: ';
            if (activityLevel === 'sedentary') {
                dietPlan += 'Balanced diet with moderate calorie intake.';
            } else {
                dietPlan += 'Balanced diet with regular exercise.';
            }
        } else if (goal === 'muscle_gain') {
            dietPlan += 'For muscle gain: ';
            if (activityLevel === 'sedentary') {
                dietPlan += 'High-protein diet with strength training exercises.';
            } else {
                dietPlan += 'High-protein diet with a mix of cardio and strength training exercises.';
            }
        }

        // Display the generated diet plan (replace this with your actual display logic)
        alert('Generated Diet Plan: ' + dietPlan);
    }

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        return validateForm();
    });
});
