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
localStorage.setItem(myObj.email,myObj_serialized);
let myObj_Deserialized=JSON.parse(localStorage.getItem("myObj"))



//create new li element

var data = document.createElement('li');

// Add class

data.className = 'list-group-item'

//Create a delete button 
var deleteBtn = document.createElement('input');
deleteBtn.type = 'button';
deleteBtn.value = 'delete';

deleteBtn.onclick = () => {
  localStorage.removeItem(myObj.email);
  form.removeChild(data);
};

//add classes to delete button 
deleteBtn.className = 'btn-delete';

//Append Text node to delete 
deleteBtn.appendChild(document.createTextNode('X'));

  //edit button 
  var editBtn = document.createElement('input');
  editBtn.type = 'button';
  editBtn.value = 'edit';

  editBtn.onclick = () => {
    document.querySelector('#name').value = myObj.name;
    document.querySelector('#email').value = myObj.email;
    localStorage.removeItem(myObj.email);
    form.removeChild(data);
  };

  //add classes to delete button 
  editBtn.className = 'btn-edit';

  //Append Text node to delete 
  deleteBtn.appendChild(document.createTextNode('X'));

//add text node with input value

data.appendChild(document.createTextNode(newName));
data.appendChild(document.createTextNode('  ' + newEmail));

//append child
form.appendChild(data);
data.appendChild(deleteBtn)
data.appendChild(editBtn);

}