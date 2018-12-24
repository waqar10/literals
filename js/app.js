/*
****12-23-2018****
***Topics***
*Object Literals
*Template Literals
*Function Declleration
*Function Expression
*Property Methods
*Immediately Invoked Method
*/

//  Object Literals
year:function value(user_name){
  return user_name;
  let value = people;
  console.log(value.year("waqar"));
}

// Template Literals
function greetMe(userName){
  // document.write("Mr:"+userName);
  document.write(`<h4>Mr : ${userName}</h4>`);
}
greetMe("Waqar Ali Khan");

//  Function Decleration
function hiUser(yourName){
  return  yourName;
}
console.log(hiUser("Hi User"));

//  Function Expression
const multipleIs = function(x,y){
  return x*y;
};
console.log(multipleIs(12,5));

const funValue = function(waqar){
  return  funValue;
};

const sumIs = function(a,b){
  return  a,b;
};
console.log(sumIs(10,5));

//Property Methods
let bioData={
  getUserName: function(getName){
    return  getName;
  },
  getUserAddress: function(getAddress){
    return  getAddress;
  }
}
const c=bioData.getUserName("Ahmed Khan");
const d=bioData.getUserAddress("Defense Colony Gilgit");

document.write(`<h4>User name is: ${c} and</h4><h4> Address is: ${d}</h4>`);

//  Imediadtely Invoked Function Expression
  function  hi(myUser){
  console.log(myUser);
} hi("I'm Imediately Invoked");

function greet(name){
  // document.write("Greetings Mr:"+name);
  document.write(`<h4>Greeting Mr: ${name}</h4>`)
}
greet("Waqar Ali Khan");