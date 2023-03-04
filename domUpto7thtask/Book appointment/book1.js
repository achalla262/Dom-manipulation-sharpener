var form = document.getElementById('my-form');

// submit event 
form.addEventListener('submit',addItem);

function addItem(e) {
  e.preventDefault();

//   // getting input 
//   var newName = document.getElementById('name').value
//   var newEmail = document.getElementById('email').value

//   // inserting in local storage
//   localStorage.setItem("name",newName);
//   localStorage.setItem("email",newEmail);
// }


var newName = document.getElementById('name').value;
var newEmail = document.getElementById('email').value;


let myObj={
  name:newName,
  email: newEmail,
}

let myObj_serialized=JSON.stringify(myObj);
localStorage.setItem("key",myObj_serialized);
let myObj_Deserialized=JSON.parse(localStorage.getItem("myObj"))
}