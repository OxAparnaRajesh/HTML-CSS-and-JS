//strings
console.log('hello, world');
let email="aparna.sri85@gmail.com";
console.log(email);

//string concatenation
let firstName= 'Aparna';
let lastName='Rajesh';

let fullName= firstName+ ' ' +lastName;
console.log(fullName);

//getting charachters

console.log(fullName[0]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result=fullName.toLowerCase();
console.log(result);

let index=email.indexOf('@');
console.log(index);

//common string methods:

let email1= 'rajesh@haitwik.com';
//let result1= email1.lastIndexOf('i');

//let result1=email1.slice(0,5);
//let result1=email1.substr(4,10); 
let result1=email1.replace('i','ii');
console.log(result1);

//*************************************************/

//Numbers

let radius=10;
const pi= 3.14;

console.log(radius,pi);

//math operations +,-,*,/,**,%

//console.log(10/2);
//let calc= radius % 3;
//let calc1 = pi* radius**2;
//console.log(calc);


// Order of operation: B I D M A S

//let calc1 = 5*(10-3)**2;
//console.log(calc1);

let likes=10;
//likes =likes+1;
//likes++;
//likes--;
//likes+=20;
//likes-=5;
//likes*=2;
//likes/=2;
//console.log(likes);

//NaN - not a number

//console.log(5*'welcome');

let str='the blog has' + likes +'likes';
console.log(str);

//template strings:

const title='best reads of 2019';
const author='Aparna';
const like=30;

//concatenation way:

//let strresult='The blog called'+ title+'By'+ author + 'has'+like+'likes';
//console.log(strresult);

//template string way

let strresult = `The blog called ${title} by ${author} has ${like} likes`;
console.log(strresult)

//creating html templates
let html=`
<h2>${title}</h2>
<p>by ${author}</p>
<span> this blog has ${like} likes </span>`;
console.log(html);


//arrays:

let ninjas=['abi','haitwik','raj'];

//ninjas[1]='haitwikrajesh'
//console.log(ninjas[1]);

//let ages =[20,25,30,35];
//console.log(ages[2]);

//let random =['abi','haitwik','raj',20,4,24];
//console.log(random);
//console.log(ninjas.length);

//array methods:

//let res= ninjas.join('-');

//let res= ninjas.indexOf('raj');

//let res=ninjas.concat('haitu','avva');

let res=ninjas.push('haitu');
res=ninjas.pop();
console.log(ninjas);

