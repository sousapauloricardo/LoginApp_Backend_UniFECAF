document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        UserEmail: username,
        UserPassword: password 
      }),
    });
    
    const data = await response.json();
    
    if (response.ok) {
      console.log(data)
      document.getElementById('message').textContent = data.erro;
      document.getElementById('message').style.color = 'green';

      localStorage.setItem('token', data.token);

      window.location.href = "user.html"
      
    } else {
      console.log(data)
      document.getElementById('message').textContent = data.erro;
      document.getElementById('message').style.color = 'red';
    }
  } catch (error) {
    document.getElementById('message').textContent = 'An error occurred. Please try again.';
    document.getElementById('message').style.color = 'red';
    console.error('Error:', error);
  }
});