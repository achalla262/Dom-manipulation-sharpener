//EXAMINE THE DOCUMENT OBJECT//
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.tittle);
//document.tittle=123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textcontent="hello";
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);



//GETELEMENTBYID//
//console.log(document.getElementBYID('header-title')
//var headerTitle=document.getElementByID('header-title')
//var header=document.getElementByID('main-header');
//headerTitle.textcontent='hello';
//headerTitle.innerText='Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>hello</h3>';
//headerTitle.style.borderBottom='solid 3px #000';



//GETELEMENTBYCLASSNAME//
// var items=document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[1].textContent='hello 2';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='yellow';

//var addItems=document.getElementsByClassName('title');
//addItems[0].style.fontWeight='bold';
//addItems[0].style.backgroundColor='green';  

//GETELEMENTSBYCLASSNAME//
//var items=document.getElementsByClassName('list-group-items');
//console.log(items);
//console.log(items[1]);
//items[1].textContent="hello 2";
//items[1].style.fontWeight="bold";
//items[1].style.backgroundColor="Yellow";
//items.style.backgroundColor='#f4f4f4';
//for(var i=0;i<items.length;i++){
  //items[i].style.backgroundColor='#f4f4f4';
//}

//var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[2].textContent="hello 3";
// items[2].style.fontWeight="bold";
//items[2].style.backgroundColor="green";

//for(var i=0;i<items.length;i++){
  //items[i].style.fontWeight='bold';
//}


//GETELEMENTSBYTAGNAME//
//var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent="hello 2";
 //li[1].style.fontWeight="bold";
 //li[1].style.backgroundColor="yellow";

//for(var i=0;i<li.length;i++){
 //li[i].style.backgroundColor='#f4f4f4';
//}

//GETELEMENTSBYCLASSNAME//
//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[4]);
//items[4].textContent="hello 5";
//items[4].style.fontWeight="bold";
// for(var i=0;i<items.length;i++){
//   items[i].style.backgroundColor='pink';
// }




//GETELEMENTSBYTAGNAME//
//  var li = document.getElementsByTagName('li');
//  console.log(li);
//  console.log(li[4]);
//  li[4].textContent="item 5";
//  li[4].style.fontWeight="bold";
 
//  for(var i=0;i<li.length;i++){
  // li[i].style.backgroundColor='#f4f4f4';
// }


//QUERY SELECTOR//
// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor="green";

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
//  thirdItem.style.visibility="hidden";

//QUERY SELECTOR ALL//
// var item=document.querySelectorAll('list-group-item');
// console.log(item);
// item[1].style.color='green';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//   odd[i].style.backgroundColor="green";
// }


//TRAVERSING THE DOM//
var itemList=document.querySelector('#items');
//parentNode//
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);


//parentElement//
//  console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
//  console.log(itemList.parentElement.parentElement.parentElement);

//childNodes//
//console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.background ='yellow';

// FirstChild
//console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';


//lastChild
// console.log(itemList.lastChild);
//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 4';


//nextsibling
//console.log(itemList.nextSibling);
//nextElementsibling
//console.log(itemList.nextElementSibling)

// //previousSibling
// console.log(itemList.previousSibling);
// //previousElementsibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';


//createElement//

//create a div
var newDiv = document.createElement('div');

//Add class
newDiv.className='hello';

//Add id
newDiv.id='hello1';

//Add attr
newDiv.setAttribute("title" ,"Hello Div");

//create text node
var newDivText = document.createTextNode('Hello');

//Add text to div
newDiv.appendChild(newDivText);

 var container = document.querySelector('header .container');
 var h1 = document.querySelector('header h1');

 console.log(newDiv);
 newDiv.style.fontsize='30px';

container.insertBefore(newDiv,h1);


var newDiv1=document.createElement('div');
newDiv1.classList.add('hellooooo1');
newDiv1.id="helooooo2";
newDiv1.setAttribute("title","anu")
var textdiv=document.createTextNode("Hello")
newDiv1.appendChild(textdiv)
var container=document.querySelector('ul')
var cls=document.querySelector("li")
container.insertBefore(newDiv1,cls)

