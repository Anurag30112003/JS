// console.log('Hello World');

// let name = 'Rick'; // String

// let age = 25; // Number

// let isApproved = false; // Boolean

// let firstName = undefined; // Undefined

// let selectedColour = null; // Null


// let num1 = 5
// let num2 = 5

// function addNumber(num1 , num2){
//     return num1 + num2

// }

// console.log(addNumber(num1,num2))

// const fruits = ['Apple','Mango', 'Oranges'];

//  const hello = fruits.map(function (variable){
//     return variable[2]
//  })


// const todos = [
//    {
//       id:1,
//       text:'Take out Trash',
//       status: true
//    },
//    {
//       id:2,
//       text:'Meeting with boss',
//       status:true
//    },
//    {
//       id:3,
//       text:'Dentist Appointment',
//       status:false
//    }
// ];


// const hell = JSON.stringify(todos);
//  console.log(hell)

// for (let i = 0; i<todos.length; i++){

//    console.log(todos[i].text , todos[i].status)


// }

// for (i of todos){
//    console.log(i.text)
// };

// todos.forEach(function(todo){
//    console.log(todo.text)
// });

// const todoItem = todos.map(function(todo){
//    // console.log( todo.text)
//    return todo.text
// });

// console.log(todoItem)

// const todoCompleted = todos.filter(function(todo){
//    return todo.status === true
// });
// console.log(todoCompleted)

// const todoCompleted = todos.filter(function(todo){
//    return todo.status === false
// }).map(function(todo){
//    return todo.text
// });
// console.log(todoCompleted)

// const x = 10;

// if (x === 10){
//    console.log('X is 10')
// } else if(x>0){
//    console.log('x is greater than 0')
// }else{
//    console.log('x is smaller than 0')
// }

// const x = 10;
// const y = 45;
// // const color = x==10 && y==5 ? 'red':'blue';
// const color ='white';
// // console.log(color)


// switch(color){
//    case 'red':
//       console.log('colour is red')
//       break;
//    case 'blue':
//       console.log('colour is blue')
//       break;
//    default:
//       console.log('colour is neither red nor blue')
//       break;   

//    }
//  function addNum(num1 , num2){
//     console.log(num1+num2)
//  }

//  addNum(5,9)

// const addNum = ()=>{
//     return 'hello'   
// } 
// console.log(addNum())

// let num = 5;
// const hello = (num) =>{
//     return `hello${num}`
// }

// console.log(hello(num))


// function Person (firstName,lastName,dob){

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = dob
// }

// const person1 = new Person('John','Smith','1990');
// console.log(person1.firstName)

// const head = document.querySelector('.head');

// const express = require('express');

// const app = express()

// app.get('/',(req,res)=>{
//     res.json({'message':'Hello World'})
// })

// app.listen(5000)

// // const items = document.querySelectorAll('.item');
// const items = document.querySelector('.items');

// // items.forEach((item) => {
// //     console.log(item.textContent)    
// // });

// // items.remove();
// // items.lastElementChild.remove(); 
// items.firstElementChild.textContent = 'Vitalik';
// items.children[1].innerText ='Zuck';
// items.lastElementChild.innerHTML ='<h1> Harry</h1>';

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);


function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML ='Please Enter all Fields'
        setTimeout(() => msg.remove(),3000);
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value ='';    
    };

}