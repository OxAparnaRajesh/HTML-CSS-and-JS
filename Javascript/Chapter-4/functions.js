// //functions:
// //function declaration

// function greet(){

//     console.log('Hello, there!')

// }

// //function expression

// const speak = function(){

//     console.log('good day!');
// };
// // greet(); //calling function/invoking function
// // greet();
// // greet();

// speak();
// speak();

// //function expression should be declared before calling.
// //functions declaration may be or not be declared before calling.

// //**************************************************
// //arguments and parameters


// const greeting =function(name,time){
//     console.log(`Good ${time} ${name}`);
//         };

//         greeting ('rajesh','morning');

// const calcArea=function(radius){

// return 3.14*radius**2;


// };
// const area = calcArea(2);
// console.log(area);

//arrow function

// const calcArea=(radius)=>{
//     return 3.14*radius**2;
// };

// const area=calcArea(5);
//console.log('area is:', area);

//practise arrow functions:

// const greet= function(){
//     return 'hello world';
// };

// const greet = () => 'hello world';

// const result= greet();
// console.log('the result is:', result);


//2.practice:
// const bill=function(products,tax){
//     let total=0;
//     for (let i=0;i<products.length;i++)
//     {
//         total+=products[i]+products[i]*tax;

//     }
//     return total;
// }




// const bill= (products,tax)=>{

//     let total=0;
//     for(let i=0;i<products.length;i++)
//     {
//         total+=products[i]+products[i]*tax;

//     }
//     return total;
// }
// console.log(bill([10,15,30],0.2));

//const name='Aparna';
//functions 



//methods :invoke by notations

//name.toUpperCase();

const ul=document.querySelector('.people');

const people =['abi','raj','haitu','haitwik','rajesh'];
let html=``;

people.forEach(function(person){
html+=`<li style="color: purple"> ${person}</li>`


})
console.log(html);
ul.innerHTML =html;