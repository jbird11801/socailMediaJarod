
//handles loging in

const loginFormHandler = async (event) => {

    event.preventDefault();
  
    // Collects login info

    const email = document.querySelector('#login-identifier').value.trim();

    const password = document.querySelector('#login-password').value.trim();


    if (email && password) {

      const info = {
        email: email ,
        password : password 
      }

      const response = await fetch('api/signIn/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      })

      if (response.ok) {
      
      document.location.replace('/dashboard');

      }

      else {

        alert(response.statusText);

      }
    }

  };


  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    window.location.href = '/signup';
    console.log("sign up"); // send user to sign up page 
    
  };

// listeners

document
.querySelector('#login-form')
.addEventListener('submit', loginFormHandler);

document
.querySelector('#toggle-form')
.addEventListener('click', signupFormHandler);

  
