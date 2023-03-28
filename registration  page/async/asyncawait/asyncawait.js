// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringingTicks = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('ticket');
//   },3000)
// });

// const getPopcorn=promiseWifeBringingTicks.then((t)=>{
//   console.log('Wife: i have the tics');
//   console.log('husband: we should go in');
//   console.log('wife: no i am hungry');
//   return new Promise((resolve,reject)=>resolve(`${t}popcorn`));

// })
// const getButter=getPopcorn.then((t)=>{
//   console.log('husband: i got some popcorn');
//   console.log('husband: we should go in');
//   console.log('wife: I need butter on my popcorn');
//   return new Promise((resolve,reject)=>resolve(`${t}butter`));

// })
// const getColdDrinks = getButter.then((t)=>{
//   console.log('husband: i got some butter');
//   console.log('wife: I need cold drinks with popcorn');
//   return new Promise((resolve,reject)=>resolve(`${t}cold drinks`));

// })


// console.log('person4: shows ticket');
// console.log('person5: shows ticket');



console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie =async()=>{
  
  const promiseWifeBringingTicks = new Promise((resolve,reject)=>{setTimeout(()=>reject('ticket'),3000)
   });

   let ticket
   try{
    ticket= await promiseWifeBringingTicks;
  }catch(e){
     ticket='sad face';
  }
  //  const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`))
  //  const getCandy=new Promise((resolve,reject)=>resolve(`candy`))
  //  const getColdDrinks=new Promise((resolve,reject)=>resolve(`coldDrinks`))
  //  let ticket= await promiseWifeBringingTicks;
  //  let[popcorn,candy,coldDrinks]=await Promise.all([getPopcorn,getCandy,getColdDrinks])
  //  console.log(`${popcorn},${candy},${coke}`)
  return ticket;
    
}
preMovie().then((m)=>console.log(`person3: shows ${m}`))
console.log('person4: shows ticket');
console.log('person5: shows ticket');

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

let userActive = [];
let user = {
  userName: "xyz",
  lastActivetime: 0,
};
function updateLasteUseractivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastActivetime = new Date().getTime();
      resolve(user.lastActivetime);
    }, 1000);
  });
}
function creatpost(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.userName = value;
      resolve(user.userName);
      console.log(user);
    });
  });
}
function deletePost() {
  return new Promise((resol, reject) => {
    setTimeout(() => {
      userActive.pop();
      resol();
    }, 1000);
  });
}

async function preposts() {
  try {
    console.log("anu");
    let x = await creatpost("shreenu");
    let y = await creatpost("raki");
    let d = await creatpost("amma");
    let r = await creatpost("appa");
    let l = await updateLasteUseractivityTime();
    userActive.push(x);
    userActive.push(y);
    userActive.push(d);
    userActive.push(r);
    userActive.push(l);
    let m = await deletePost();
  } catch (err) {
    console.log("show error ");
  }
}
preposts();
console.log(userActive);