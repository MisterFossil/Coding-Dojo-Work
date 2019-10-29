var users = [{name: "Michael", age:37}, 
             {name: "John", age:30},
             {name: "David", age:27}];

// Print/log John's age
console.log(users[1].age);

//Print/log the name of the fist object
console.log(users[0].name);

//Print/log the name and age of each user using a for loop.
for(var i = 0; i < users.length; i++){
    console.log(users[i].name, '-', users[i].age);
}