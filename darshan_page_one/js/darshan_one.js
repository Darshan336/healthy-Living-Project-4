// JavaScript code for button animation
const askButton = document.getElementById('ask_coach');

// Add event listener for mouse enter to scale up the button
askButton.addEventListener('mouseenter', function () {
    askButton.style.transform = 'scale(1.1)';
    askButton.style.transition = 'transform 0.3s ease';
});

// Add event listener for mouse leave to scale down the button
askButton.addEventListener('mouseleave', function () {
    askButton.style.transform = 'scale(1)';
});

// Add event listener for button click to display a random response
askButton.addEventListener('click', function () {
    const response = getRandomResponse();
    alert('Coach says: ' + response);
});

// Select all recipe cards and add hover effect
const recipeCards = document.querySelectorAll('.recipe-card');
recipeCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        card.style.transform = 'scale(1.1)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', function () {
        card.style.transform = 'scale(1)';
    });
});

// Select all view recipe links and add hover effect, also handle click event to open recipe page in a new tab
const viewRecipeLinks = document.querySelectorAll('.recipe-card a');
viewRecipeLinks.forEach(link => {
    link.addEventListener('mouseenter', function () {
        link.style.color = 'red'; // Change color to red on hover
    });

    link.addEventListener('mouseleave', function () {
        link.style.color = ''; // Reset color on mouse leave
    });

    link.addEventListener('click', function (event) {
        // Get the recipe URL from the data-recipe-url attribute
        let recipeUrl = link.getAttribute('data-recipe-url');

        // Open the recipe page in a new tab
        window.open(recipeUrl, '_blank');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let images = [
        "./darshan_oneimages/nutrition.jpg",
        "./darshan_oneimages/ss1.jpg",
        "./darshan_oneimages/ss2.jpg",
        "./darshan_oneimages/ss3.jpg",
        "./darshan_oneimages/ss4.jpg",
        "./darshan_oneimages/ss5.jpg"
    ];

    let slideshow = document.getElementById("slideshow");
    let currentIndex = 0;


    // Function to change image
    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        slideshow.src = images[currentIndex];
    }

    // Change image every 3 seconds
    function startSlideshow() {
        setInterval(changeImage, 3000);
    }

    // Start the slideshow
    startSlideshow();
});

// Function to calculate BMI based on user inputs
function calculateBMI() {
    let weightInput = document.getElementById('weight');
    let heightInput = document.getElementById('height');
    let ageInput = document.getElementById('age');
    let goalInput = document.getElementById('goal');

    // Validate inputs
    if (!validateInput(weightInput) || !validateInput(heightInput) || !validateInput(ageInput) || !validateInput(goalInput)) {
        alert("Please enter valid values for all inputs.");
        return;
    }

    // Extract values from input elements
    let weight = weightInput.value;
    let height = heightInput.value;
    let age = ageInput.value;
    let goal = goalInput.value;

    // Additional validation for non-negative values and zero
    if (weight <= 0 || height <= 0 || age <= 0) {
        alert("Please enter non-negative or zero values for weight, height, and age.");
        return;
    }

    // Calculate BMI
    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    // Build BMI result message based on user's goal
    let bmiResult = `<br>Your BMI is: <span style="color: #e74c3c; font-weight: bold;">${bmi}</span><br>`;

    if (goal === "lose") {
        // If goal is to lose weight
        bmiResult += "To lose weight, consider a balanced diet and regular exercise.";
        bmiResult += getNutrientRecommendations(weight, height, age, 1.2, goal);
    } else if (goal === "maintain") {
        // If goal is to maintain weight
        bmiResult += "To maintain weight, focus on a balanced diet and consistent exercise.";
        bmiResult += getNutrientRecommendations(weight, height, age, 1.5, goal);
    } else if (goal === "gain") {
        // If goal is to gain weight
        bmiResult += "To gain weight, consume a calorie surplus and focus on strength training.";
        bmiResult += getNutrientRecommendations(weight, height, age, 1.8, goal);
    }

    // Display BMI result
    document.getElementById('bmi-result').innerHTML = bmiResult;

    // Display exercise recommendations
    let exerciseResult = getExerciseRecommendations(goal);
    document.getElementById('exercise-recommendations').innerHTML = `<br><strong>Exercise Recommendations:</strong><br>${exerciseResult}`;

    // Function to validate input (checks if it is not an empty string)
    function validateInput(inputElement) {
        return inputElement.value.trim() !== "";
    }
}

// Function to get macronutrient recommendations based on user's goal
function getNutrientRecommendations(weight, height, age, activityMultiplier, goal) {
    let proteinRatio, carbRatio, fatRatio;

    // Set macronutrient ratios based on the goal
    if (goal === "lose") {
        proteinRatio = 1.2;
        carbRatio = 2.5;
        fatRatio = 0.3;
    } else if (goal === "maintain") {
        proteinRatio = 1.5;
        carbRatio = 2.0;
        fatRatio = 0.5;
    } else if (goal === "gain") {
        proteinRatio = 1.8;
        carbRatio = 2.5;
        fatRatio = 0.8;
    }

    // Calculate total calories and macronutrient values
    let totalCalories = calculateCalories(weight, height, age, activityMultiplier);
    let protein = ((proteinRatio * weight)).toFixed(2);
    let carbs = ((carbRatio * weight)).toFixed(2);
    let fats = ((fatRatio * weight)).toFixed(2);

    // Build and return macronutrient recommendations message
    let nutrientRecommendations = `<br>For your body weight and goal, consider the following macronutrient recommendations:<br>`;
    nutrientRecommendations += `Total Calories: <span style="color: #3498db;">${totalCalories}g</span><br>`;
    nutrientRecommendations += `Protein: <span style="color: #3498db;">${protein}g</span><br>`;
    nutrientRecommendations += `Carbs: <span style="color: #3498db;">${carbs}g</span><br>`;
    nutrientRecommendations += `Fats: <span style="color: #3498db;">${fats}g</span><br>`;

    return nutrientRecommendations;
}

// Function to calculate total calories based on BMR and activity multiplier
function calculateCalories(weight, height, age, activityMultiplier) {
    let bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    let totalCalories = bmr * activityMultiplier;
    return totalCalories;
}

// Function to get exercise recommendations based on user's goal
function getExerciseRecommendations(goal) {
    let exerciseList = "";

    // Build exercise recommendations based on the goal
    if (goal === "lose") {
        exerciseList += "Consider incorporating the following exercises to support weight loss:<br>";
        exerciseList += "1. Cardiovascular exercises (e.g., running, cycling, swimming)<br>";
        exerciseList += "2. High-intensity interval training (HIIT)<br>";
        exerciseList += "3. Strength training with compound exercises (e.g., squats, deadlifts)<br>";
        exerciseList += "4. Core exercises (e.g., planks, crunches)<br>";
    } else if (goal === "maintain") {
        exerciseList += "For weight maintenance, a balanced fitness routine is essential. Include:<br>";
        exerciseList += "1. Cardio exercises for heart health (e.g., brisk walking, jogging)<br>";
        exerciseList += "2. Strength training for muscle maintenance (e.g., weightlifting)<br>";
        exerciseList += "3. Flexibility exercises (e.g., yoga, stretching)<br>";
        exerciseList += "4. Incorporate activities you enjoy to stay active consistently.<br>";
    } else if (goal === "gain") {
        exerciseList += "To support weight gain, focus on strength training and muscle building:<br>";
        exerciseList += "1. Heavy weightlifting with compound movements (e.g., bench press, squats)<br>";
        exerciseList += "2. Progressive overload in resistance training<br>";
        exerciseList += "3. Consume a calorie surplus and ensure adequate protein intake<br>";
        exerciseList += "4. Include compound exercises and rest adequately between workouts<br>";
    } else {
        exerciseList += "Invalid goal selection. Please choose 'lose', 'maintain', or 'gain'.<br>";
    }

    return exerciseList;
}

// Function to submit success stories
function submitStory() {
    let newStoryText = document.getElementById('newStory').value;

    // Validate if the entered story is not empty
    if (newStoryText.trim() === '') {
        alert('Please enter a valid story.');
        return;
    }

    // Create HTML elements for the new success story
    let storyContainer1 = document.querySelector('.story-container1');
    let newStoryDiv = document.createElement('div');
    newStoryDiv.className = 'story-container1';

    let newStoryHeading = document.createElement('h2');
    newStoryHeading.textContent = 'Success Story';

    let newStoryParagraph = document.createElement('p');
    newStoryParagraph.className = 'success-story';
    newStoryParagraph.textContent = newStoryText;

    let timestamp = document.createElement('div');
    timestamp.className = 'timestamp';
    timestamp.textContent = getCurrentTimestamp();

    // Append elements to the new story container
    newStoryDiv.appendChild(newStoryHeading);
    newStoryDiv.appendChild(newStoryParagraph);
    newStoryDiv.appendChild(timestamp);

    // Add the new story to the beginning of the container
    storyContainer1.insertBefore(newStoryDiv, storyContainer1.firstChild);

    // Clear the textarea after submitting
    document.getElementById('newStory').value = '';
}

// Function to get the current timestamp in a specific format
function getCurrentTimestamp() {
    let now = new Date();
    let options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    return now.toLocaleDateString('en-US', options);
}
