document.addEventListener('DOMContentLoaded', function() {
    // Array of objects containing information about different mental health conditions
    const scrollPhoto = [
        {url:'../img/1.jpeg', h4:'Antisocial personality disorder', p:'Antisocial Personality Disorder (ASPD) is a mental health condition characterized by a persistent pattern of disregard for the rights of others. Individuals with ASPD may exhibit behaviors such as deceit, impulsivity, irritability, aggression, and a lack of remorse for their actions. This disorder can significantly impact interpersonal relationships and may lead to legal difficulties.'},
        {url:'../img/2.png', h4:'Anxiety disorders', p:'Anxiety disorders encompass a range of conditions characterized by excessive worry, fear, or nervousness. Common types include generalized anxiety disorder, panic disorder, social anxiety disorder, and specific phobias. People with anxiety disorders may experience physical symptoms such as rapid heartbeat, trembling, and sweating. Treatment often involves therapy, medication, or a combination of both.'},
        {url:'../img/3.jpg', h4:'Bipolar disorder', p:'Bipolar Disorder, also known as manic-depressive illness, is a mood disorder characterized by extreme mood swings. Individuals with bipolar disorder may experience episodes of mania, characterized by elevated mood, increased energy, and impulsive behavior, as well as episodes of depression, marked by low mood and reduced energy. Treatment typically involves mood-stabilizing medications and psychotherapy.'},
        {url:'../img/4.jpg', h4:'Post-traumatic Stress Disorder', p:'PTSD is a mental health condition that can develop after experiencing or witnessing a traumatic event. Symptoms may include flashbacks, nightmares, severe anxiety, and uncontrollable thoughts about the event. Treatment often involves therapy, including cognitive-behavioral therapy (CBT) and medications.'},
        {url:'../img/5.jpg', h4:'Schizophrenia', p:'Schizophrenia is a severe mental disorder characterized by distorted thinking, hallucinations, and a reduced ability to function in daily life. Individuals with schizophrenia may have difficulty distinguishing between what is real and what is imaginary. Treatment typically involves a combination of antipsychotic medications and supportive therapies.'},
        {url:'../img/6.png', h4:'Suicidal behavior', p:"Suicidal behavior refers to thoughts, plans, or actions related to ending one's own life. It is a serious concern that can be associated with underlying mental health conditions such as depression, anxiety, or bipolar disorder. Immediate intervention and support are crucial, and individuals experiencing suicidal thoughts should seek help from mental health professionals or helplines."}
    ];

    // Selecting elements using jQuery
    let img = $('#c4 img');
    let title = $('#c4 h4');
    let info = $('#c4 p');
    let i = 0;
    let interval;

    // Function to change the displayed photo and information
    function changePhoto() {
        i++;
        if (i >= scrollPhoto.length) {
            i = 0;
        }

        // Fade out and update image
        img.fadeOut(400, function () {
            img.attr('src', scrollPhoto[i].url).fadeIn(500);
        });

        // Fade out and update title
        title.fadeOut(400, function () {
            title.text(scrollPhoto[i].h4).fadeIn(500);
        });

        // Fade out and update information
        info.fadeOut(400, function () {
            info.text(scrollPhoto[i].p).fadeIn(500);
        });

        // Update selected indicator in the list
        $('#c4 ul .selected').removeClass('selected');
        $('#c4 ul li:nth-child(' + (i + 1) + ')').addClass('selected');
    }

    // Set interval for automatic photo change every 3 seconds
    interval = setInterval(changePhoto, 3000);

    // Pause interval on mouse enter
    $('#c4').mouseenter(function () {
        clearInterval(interval);
    });

    // Resume interval on mouse leave
    $('#c4').mouseleave(function () {
        interval = setInterval(changePhoto, 3000);
    });
});
