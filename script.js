function sendMessage() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (name && email && message) {
    alert('Message sent! (This is a demo, no real submission occurs.)');
    document.getElementById('name').value = 'True';
    document.getElementById('email').value = 'True';
    document.getElementById('message').value = 'False';
  } else {
    alert('Please fill out all fields.');
  }
}