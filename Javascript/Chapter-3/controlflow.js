
//control flow: use loops for cycling through data

//for loops

// for(let i=0;i<5;i++){
//     console.log('in loop:',i);  //code block
// }
// console.log('loop finished');

//const names=['abi','aruna','gayathri'];

// for(let i=0;i<names.length;i++)
// {
//     console.log(names[i]);
// }

//while loops
// let i=0;
// while(i<5)
// {
//     console.log('in loop', i);
//     i++;

// }


// let i=0;

// while(i<names.length){
//     console.log(names[i]);
//     i++;
// }

//Do while

// let i=5;
// do{
//     console.log('val of i is:',i);
//     i++;
// } while(i<5);


// if statements:

// const age=25;

// if(age>20){
//     console.log('you are over 20 years old');
// }

// const ninjas=['abi','raj','haitwik','rajesh'];
// if(ninjas.length>3){
//     console.log("that's a lot of ninjas");

// }

// const password='password';
// if(password.length>=12){
//     console.log('that password is might strong');
// }else if (password.length>=8){
//     console.log('that password is  long enough')
// }
// else{
//     console.log('password is not long enough');
// }


//logical operators -OR || and AND &&

// const password='p@ss';

// if (password.length>=12 && password.includes('@'))
// {
//     console.log('password is strong');
// }else if(password.lenght>=8 || password.includes('@') && password.length>=5){
//     console.log('password is good');
// }else {
//     console.log('password is not long enough');
// }

//logical NOT(!)
// let user=false;
// if(!user){
//     console.log('you must be logged in')

// }
// console.log(true);
// console.log(false);

//break and continue

const scores=[50,25,0,30,100,20,30];
for (let i=0;i<scores.length;i++)
{
    if(scores[i]===0)
    {
        continue;
    }
    console.log('Your score:',scores[i]);

    if(scores[i] === 100){
    console.log('congrats');
    break;
}
}