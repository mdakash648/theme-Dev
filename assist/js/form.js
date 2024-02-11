document.getElementById('submit').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form submission

  // Check if name and email fields are filled
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');

  if (nameInput.value === '' && emailInput.value === '' ) {
    alert('Please fill in the required fields : Name & Email.');
    return; // Stop execution if fields are not filled
  } else if (emailInput.value === '') {
    alert('Please fill in the required fields : Email.');
    return; // Stop execution if fields are not filled
  } else if (nameInput.value === '' ) {
    alert('Please fill in the required fields : Name .');
    return;
  }

  // Create the alert element
  var alertElement = document.createElement('div');
  alertElement.classList.add('alert', 'alert-success');
  alertElement.innerText = 'Your message is sent';

  // Add the alert element to the document body
  document.querySelector('.alert_box').appendChild(alertElement);

  // Automatically remove the alert after a certain time (optional)
  setTimeout(function () {
    alertElement.remove();
  }, 1500); // Remove after 3 seconds (adjust as needed)
});