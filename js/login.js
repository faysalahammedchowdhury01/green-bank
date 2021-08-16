// selectors
const loginForm = document.getElementById('login-form');
const emailField = document.getElementById('email-field');
const passwordField = document.getElementById('password-field');

// handle login
function handleLogin(event) {
  event.preventDefault();

  // get users info
  const userEmail = emailField.value;
  const userPassword = passwordField.value;

  if (userEmail == 'user@gmail.com' && userPassword == '1234') {
    window.location.href = 'banking.html';
  } else {
    alert(
      'Sorry, your password was incorrect. Please double-check your password.'
    );
  }
}

loginForm.addEventListener('submit', handleLogin);
