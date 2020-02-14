let user={
name: 'Abi',
age:34,
Job:'Developer',
email: 'abi@gmail.com',
location: 'Malaysia',
speacialist: 'Javascript',
blogs:['why mac & cheese rules','10 to 20 rules'],
login: function(){
    console.log('the user logged in');
},
logout:function(){
    console.log('the user logged out');

},
logBlocks: function(){
    console.log('this user has wirtten 2 values');
    this.blogs.forEach(blog =>{
        console.log(blog);
    })
}

};

// console.log(user);
// console.log(user.name);

// user.age=30;
// console.log(user.age);
// console.log(user);

user.login();
user.logout();

user.logBlocks();
console.log(this);