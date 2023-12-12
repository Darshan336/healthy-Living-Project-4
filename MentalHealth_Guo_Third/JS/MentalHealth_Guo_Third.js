const totalQuestions = 15;
let currentQuestionIndex = 0;

// showQuestion function
//first, i need to hide all question. 
//based on the index of question, use a loop to present only one question per times.
//get the button by using dom
//in the first question, hide the previous button
//in the last question, hide the next button, and present submit button

function showQuestion(index) {
    // Hide all questions
    for (let i = 1; i <= totalQuestions; i++) {
        const question = document.getElementById(`que${i}`);
        if (question) {
            question.style.display = 'none';
        }
    }

    // Show the current question
    const currentQuestion = document.getElementById(`que${index + 1}`);
    if (currentQuestion) {
        currentQuestion.style.display = 'block';
    }

    // Update button visibility
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    const submitButton = document.getElementById('submitButton');

    if (index === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'inline-block';
    }

    if (index === totalQuestions - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function nextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

function calculateScore() {

    let totalScore = 0;
    
    for (let i = 1; i <=15; i++) {
        totalScore += parseInt(document.querySelector(`input[name="choice${i}"]:checked`).value);
    };

    if(totalScore < 60){
        feedback = "Your emotional state appears to be relatively low, and we recommend seeking consultation with a mental health professional. Professional assistance may help you better understand and address your current psychological condition, while also considering positive self-care practices.";
    }
    else if(totalScore<80 || totalScore >= 60){
        feedback = "Your emotional state is at an average level, but it may require additional attention. Ensure that you monitor changes in your emotions and consider adopting self-care measures, such as regular exercise, relaxation activities, or sharing your feelings with friends.";
    }
    else if(totalScore > 80){
        feedback = "Congratulations! Your emotional state seems to be in good condition. Continue maintaining a positive lifestyle, focusing on the balance of both physical and mental aspects to ensure sustained happiness and well-being.";
    }

    $.magnificPopup.open({
        items: {
            src: '<div class="feedback-popup"><p>' + feedback + '</p></div>',
            type: 'inline'
        }
    });
};
// end of showQuestion function 


// Initial setup
showQuestion(currentQuestionIndex);

let feedback;



