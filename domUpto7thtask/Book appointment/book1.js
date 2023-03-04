var form = document.getElementById('my-form');

// submit event 
form.addEventListener('submit',addItem);

function addItem(e) {
  e.preventDefault();

  // getting input 
  var newName = document.getElementById('name').value
  var newEmail = document.getElementById('email').value

  // inserting in local storage
  localStorage.setItem("name",newName);
  localStorage.setItem("email",newEmail);
}