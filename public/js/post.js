const postHandler = async (event) => {

    event.preventDefault();

    const username = document.getElementById('Name');

    const userText = username.textContent;

    // get session user name 

    const text = document.querySelector('#TextBox').value.trim();

        const info = {

            userName : userText,

            text : text
        }
  
        await fetch('/api/post/create-text-post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(info),
        })

        window.location.href = '/dashboard';
  
};

document.querySelector('#postButton')
.addEventListener('click', postHandler);
