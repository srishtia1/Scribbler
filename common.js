document.addEventListener('DOMContentLoaded', function() {
    var signupmodal = document.getElementById('signup-modal');
    var signinmodal = document.getElementById('signin-modal');
    var signupButton = document.querySelector('.signup-btn');
    var signinButton = document.querySelector('.signin-btn');
    var closeButtonsignup = document.querySelector('.close-button-signup');
    var closeButtonsignin = document.querySelector('.close-button-signin');
    var signupLink = document.getElementById('signup-link');
  
    signupButton.addEventListener('click', function() {
      signupmodal.style.display = 'block';
    });

    signinButton.addEventListener('click', function() {
        signinmodal.style.display = 'block';
      });
  
    closeButtonsignin.addEventListener('click', function() {
      signinmodal.style.display = 'none';
    });
    closeButtonsignup.addEventListener('click', function() {
        signupmodal.style.display = 'none';
      });
  
    window.addEventListener('click', function(event) {
      if (event.target == signupmodal) {
        signupmodal.style.display = 'none';
      }
      if (event.target == signinmodal) {
        signinmodal.style.display = 'none';
      }
    }); 
    signupLink.addEventListener('click', function(event) {
        event.preventDefault(); 

        signinmodal.style.display = 'none';
        signupmodal.style.display = 'block';
    });
  
    var signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      if (signupForm.checkValidity()) {
        console.log('Form is valid, proceed with form submission logic.');
        signupmodal.style.display = 'none';
      } else {
        signupForm.reportValidity();
      }
    });
    var signinForm = document.getElementById('signin-form');
    signinForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (signinForm.checkValidity()) {
          console.log('Form is valid, proceed with form submission logic.');
          signinmodal.style.display = 'none';
        } else {
          signupmodal.reportValidity();
        }
      });

    
  
   
  });
  