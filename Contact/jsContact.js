// Contact Us
function submitForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var texta = document.getElementsByClassName('textarea')[0].value; // Accessing first element of the class

  let isValid = true;

  // Clear previous messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('phoneError').textContent = '';
  document.getElementById('textError').textContent = '';

  // Check and display error message for each field
  if (!name) {
      document.getElementById('nameError').textContent = 'This field is required.';
      isValid = false;
  }
  if (!email) {
      document.getElementById('emailError').textContent = 'This field is required.';
      isValid = false;
  } else if (email.indexOf('@') === -1) { // Check if email contains '@'
      document.getElementById('emailError').textContent = 'Email must contain an @ symbol.';
      isValid = false;
  }
  if (!phone) {
      document.getElementById('phoneError').textContent = 'This field is required.';
      isValid = false;
  } else if (!/^\d+$/.test(phone)) { // Check if phone contains only numbers
      document.getElementById('phoneError').textContent = 'Phone number must be numeric.';
      isValid = false;
  }

  if (!texta) {
      document.getElementById('textError').textContent = 'This field is required.';
      isValid = false;
  }

  if (!isValid) {
      return false;
  }

   // Store form data in local storage
   localStorage.setItem('formData', JSON.stringify({
    name: name,
    email: email,
    phone: phone,
    message: texta
}));

// Display success message
document.getElementById('successMessage').style.display = 'block';

// Clear the form fields
document.getElementById('name').value = '';
document.getElementById('email').value = '';
document.getElementById('phone').value = '';
document.getElementsByClassName('textarea')[0].value = '';
}

function displayStoredData() {

 // Clear error messages
 document.getElementById('nameError').textContent = '';
 document.getElementById('emailError').textContent = '';
 document.getElementById('phoneError').textContent = '';
 document.getElementById('textError').textContent = '';

  var storedData = localStorage.getItem('formData');
  if (storedData) {
      var data = JSON.parse(storedData);

      // Display the data. For simplicity, using alert.
      alert("Name: " + data.name + "\nEmail: " + data.email + "\nPhone: " + data.phone + "\nMessage: " + data.message);

      // Clear the form fields
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('phone').value = '';
      document.getElementsByClassName('textarea')[0].value = '';
  } else {
      alert("No submission data found.");
  }
}

//Avoid overwriting
document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const contactDiv = document.getElementById('contactInfo');
        contactDiv.innerHTML = `
          <h2>${data.title}</h2>
          <br>
          <p>${data.message}</p>
          <br>
          <p><strong>Email:</strong> ${data.email}</p>
          <br>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <br>
          <p><strong>Address:</strong> ${data.address}</p>
        `;
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  });
