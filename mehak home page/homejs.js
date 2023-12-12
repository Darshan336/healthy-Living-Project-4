
    function showPopup(popupId) {
      var popup = document.getElementById(popupId);
      popup.style.display = "flex";
    }

    document.addEventListener('click', function (e) {
      if (e.target.className === 'popup') {
        e.target.style.display = 'none';
      }
    });

    // JavaScript for image text on hover
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
      container.addEventListener('mouseenter', function () {
        const text = this.querySelector('.image-text');
        text.style.display = 'block';
      });

      container.addEventListener('mouseleave', function () {
        const text = this.querySelector('.image-text');
        text.style.display = 'none';
      });
    });

    
    function toggleForm() {
      var formContainer = document.getElementById("questionFormContainer");
      formContainer.style.display = (formContainer.style.display === "block") ? "none" : "block";
    }

    function submitForm() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var question = document.getElementById("question").value;

      // Basic validation
      if (name === "" || email === "" || question === "") {
        alert("Please fill out all fields.");
        return;
      }

      alert("Form submitted!\nName: " + name + "\nEmail: " + email + "\nQuestion: " + question);
      // Additional logic for form submission (e.g., sending data to a server)
      toggleForm(); // Close the form after submission
    }  